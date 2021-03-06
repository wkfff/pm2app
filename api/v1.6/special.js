var express = require('express');
var router = express.Router();
var models  = require('../../models');
var validator = require('validator');
var utils = require('../../utils/page');
var response = require('../../utils/response');
var str = require('../../utils/str');
var config=require('../../config/config');
var moment=require('moment');
var co = require('co');
var _ = require('lodash');
var StringBuilder = require('../../utils/StringBuilder');

module.exports={
  list:function (req,res) {
    var body=req.query;
    var options=utils.get_page_options(req);
    models.Special.findAll({
      raw:true,
      where:{special_status:0,special_parent:0},
      order:[['createdAt','DESC']],
      limit:options.pagesize,
      offset:options.offset,
      attributes:[['special_id','id'],['special_title','title'],['special_img','img'],['special_summary','summary']]
    }).then(function (data) {
      data.forEach(function(node,index){
        node.img=str.AbsolutePath(node.img)
      })
      return response.ApiSuccess(res,{list:data})
    }).catch(function (err) {
      console.log(err)
      return response.ApiError(res,{message:err.toString()})
    })
  },
  detail:function(req,res){
    "use strict";
    var body=req.query;
    if(!body.id){
      return response.ApiError(res,{message:'参数缺失'})
    }
    var sql=new StringBuilder()
    sql.AppendFormat("SELECT parent.special_title as parentTitle," +
        "children.special_title as title,children.special_content as content,children.special_id as id,children.special_img as videoPics," +
        "prd.prd_title as videoTitle," +
        "attach.attach_path as path,attach.attach_duration as duration " +
        "from gj_special as parent " +
        "INNER JOIN gj_special as children ON parent.special_id=children.special_parent " +
        "LEFT JOIN gj_prdattach as prd ON children.special_id=prd.prdid  AND prd.prd_type=30 " +
        "LEFT JOIN gj_attach as attach ON attach.attachid=prd.attachid " +
        "WHERE parent.special_id={0} AND children.special_status=0 ORDER BY id,prd.prd_desc desc",body.id);
    models.sequelize.query(sql.ToString(),{ type: models.sequelize.QueryTypes.SELECT }).then(function(data){
      var map = {},
          dest = [],
          detail={};
      for(var i = 0; i < data.length; i++){
        var node = data[i];
         if(node.videoPics){
          node.videoPics=str.AbsolutePath(node.videoPics);
        }
        if(node.path){
          node.path=str.AbsoluteVideoPath(node.path);
        }
        if(!map[node.id]){
          var item={
            title:node.title,
            id:node.id,
            content:node.content,
            pics:node.videoPics,
            path:node.path,
            duration:node.duration
          };
          dest.push(item);
          map[node.id] = 'true';
        }
/*        else{
          for(var j = 0; j < dest.length; j++){
            var dj = dest[j];
            if(dj.id == node.id){
              dj.item.push({titie:node.videoTitle,pics:node.videoPics,path:node.path});
              break;
            }
          }
        }*/
      };
      return response.ApiSuccess(res,{list:dest})
    }).catch(function (err) {
      console.log(err)
      return response.onError(res,{message:err.toString()})
    });
  }
};