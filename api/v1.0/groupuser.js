var express = require('express');
var router = express.Router();
var models  = require('../../models');
var validator = require('validator');
var utils = require('../../utils/page');
var str = require('../../utils/str');
var token = require('../../utils/token');
var response = require('../../utils/response');
var config=require('../../config/config');
var co = require('co');
// return response.ApiError(res,{message:"send_sms error"});
// return response.onDataSuccess(res,{data:list});
// return response.onListSuccess(res,{list:list});
var Groupuser={
  get_groupuser:function(req,res){
    var groupid=validator.trim(req.query.groupid);
    var qcontent=validator.trim(req.query.qcontent);
    if (!groupid) {
      return response.ApiError(res,{message:"groupid empty"});
    }
    var where={};
    where.groupid=groupid;
    where.qcontent=qcontent;
    var options=utils.get_page_options(req);
    models.Groupuser.getgroupuserbygroup({
      where:where,
      attributes:['user_id','user_company','user_phone','user_name','user_pics','groupuser_group','user_position'],
      limit:options.pagesize,
      offset:options.offset
    }).then(function(item){
      if (item) {
         item.forEach( function(node, index) {
           node.groupuser_group = node.groupuser_group;
          node.user_pics = str.AbsolutePath(node.user_pics);
        });
        return response.onListSuccess(res,{list:item});
      }else {
        return response.ApiError(res,{message:"get myfriend error"});
      }
    }, function(err){
      console.log(err)
    });
  },set_mygroupuser:function(req,res){
    var body=req.body;
    if(!body.groupid){
      return response.ApiError(res,{message:"groupid error"});
    }
    if(!body.mid){
      return response.ApiError(res,{message:"mid error"});
    }
   var content={};
        if (body.istop){
          content.group_istop=body.istop;
        }
        if (body.isdisturb){
          content.group_isdisturb=body.isdisturb;
        }
       models.Groupuser.update(content,{where:{groupuser_user:body.mid,groupuser_group:body.groupid}});
       return response.onDataSuccess(res,{data:{}});
  }
};
module.exports=Groupuser;