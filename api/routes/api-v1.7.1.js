var VSERION="/api-v1.7.1/";
var path='../v1.7.1';
var express = require('express');
var router = express.Router();
var Members = require(path+'/members');
var Group = require(path+'/group');
var InvitationCard = require(path+'/invitationcard');
var Groupuser = require(path+'/groupuser');
var Class = require(path+'/class');
var Activity = require(path+'/activity');
var Special = require(path+'/special');
var Question = require(path+'/question');
var Complaint = require(path+'/complaint');
var Places = require(path+'/places');
var Myfriend = require(path+'/myfriend');
var Sms = require(path+'/sms');
var Hx = require(path+'/hx');
var Pay = require(path+'/pay');
var Devicetoken = require(path+'/devicetoken');
var Reward = require(path+'/reward');
var Config = require(path+'/config');
var Notify=require(path+'/notify');
var Column=require(path+'/column');
var Media=require(path+'/media');
var Token = require('../../utils/token');
var Cookie = require('../../utils/cookie');
var config=require('../../config/config');
var Felog = require(path+'/felog');
var Utils = require('../../utils/utils');
var response = require('../../utils/response');
/* notify */
router.post('/alipay-notify',Notify.set_alipay_notify);//支付宝回调通知
//验证
/*router.all('/!*',function (req,res,next) {
    var path=req.originalUrl.substring(0,req.originalUrl.indexOf('?'))
    if(req.query.upt && Utils.authUpt(req.query.upt,path)){
        next()
    }else {
        return response.ApiError(res,{message:'认证失败'})
    }
})*/
//新登陆注册部分接口
router.post('/get-code',Members.get_code);   //登录验证码
router.post('/login',Members.login);   //验证码登陆
router.post('/login-password',Members.login_password);   //密码登陆
router.post('/login-set-password',Members.login_set_password);   //密码后初次设置密码
router.post('/register-auth',Members.register_auth);   //注册验证
router.post('/register',Members.register);   //用户注册
router.post('/set-password',Members.set_password);   //修改密码
router.post('/password-auth',Members.password_auth);   //密码验证

//我的个人中心接口
router.get('/self-home',Members.self_home);   //我的主页
router.get('/self-information',Members.self_information);   //我的资料
router.get('/self-goods',Members.self_goods);   //我的课程
router.get('/self-branch',Members.self_branch);   //我的分院
router.get('/self-manage',Members.self_manage);   //我的管理
router.get('/self-question-push',Members.self_question_push);   //我的问题（发布）
router.get('/self-question-assist',Members.self_question_assist);   //我的问题（赞）
router.get('/self-question-quiz',Members.self_question_quiz);   //我的问题（可以提问的）
router.get('/enterprise-detail',Members.enterprise_detail);   //企业详情
router.post('/enterprise-update',Members.enterprise_update);   //更新企业信息
router.get('/enterprise-list',Members.enterprise_list);   //企业列表
router.post('/enterprise-create',Members.enterprise_create);   //新建企业

// 会员
router.post('/app-auth',Members.app_auth);   //获取token
router.post('/send-sms',Token.auth_token,Members.send_sms);   //获取短信
router.post('/members-enter',Members.members_enter);   //登录
router.post('/members-info',Token.auth_token,Members.members_info);   //修改信息
router.get('/get-members',Members.get_member);   //获取用户信息
router.post('/put-feedback',Members.put_feedback);   //用户反馈
router.post('/del-feedback',Members.del_feedback);   //删除反馈
router.get('/get-feedback',Members.get_feedback);   //获取反馈
router.get('/get-feedbackstatus',Members.get_feedbackstatus);   //获取反馈状态
router.get('/get-memberlist',Members.get_memberslist);   //用户查询
router.post('/put-tag',Members.put_tag);   //添加标签
router.post('/del-tag',Members.del_tag);   //删除标签
router.get('/get-tag',Members.get_tag);   //获取标签
router.get('/get-otherinfo',Members.get_otherinfo);   //查看其它用户
router.get('/get-insidemembers',Members.get_insidemembers);   //内部员工列表
router.get('/check-memberbyopenid',Members.check_memberbyopenid);   //内部员工列表
router.get('/get-membersbycontent',Members.get_membersbycontent); //根据参数获取用户列表

//通知信息
router.get('/class-notice',Class.class_notice);   //获取通知
//国际化
router.get('/get-international',Class.get_international);   //国际化详情
//课程
router.get('/get-home',Class.home);   //获取首页列表
router.get('/home-module',Class.home_module);   //获取首页单个模块
router.get('/goods-list',Class.list);   //获取产品列表
router.get('/splendid-video',Class.splendid_video);   //获取精彩视频列表
router.get('/get-splendid-video',Class.get_splendid_video);   //获取精彩视频列表
router.get('/splendid-detail',Class.splendid_detail);   //获取精彩视频详情
router.get('/goods-detail',Class.goods_detail);   //获取产品详情
router.get('/goods-web-detail',Class.goods_web_detail);   //获取产品详情web专用
router.get('/branch-web-list',Class.branch_web_list);   //分院列表web专用
router.get('/goods-classlist',Class.goods_classlist);   //获取产品详情
router.get('/class-detail',Class.class_detail);   //获取课程详情
router.get('/topic-detail',Class.topic_detail);   //获取课题详情
router.get('/class-reward',Class.class_reward);   //获取课程打赏状态
router.get('/class-prophet',Class.class_prophet);   //获取课程预告
router.get('/class-back',Class.class_back);   //获取课程回顾
router.get('/my-goods',Class.my_goods);   //我的产品
//router.post('/goods-register',Token.auth_token,Class.class_register);   //产品报名
router.get('/area-list',Class.area_list);   //学区列表
router.post('/classvalue-put',Class.put_classvalue);   //提交评论
router.get('/classvalue-list',Class.classvalue_list);   //评论列表
router.get('/classvalue-label',Class.classvalue_label);   //评论标签
router.get('/notifics-list',Class.notifics_list);   //系统通知
router.get('/notifics-detail',Class.notifics_detail);   //通知详情
router.get('/get-courseware',Class.is_vip,Class.get_courseware);   //获取课件
router.get('/get-courseware-pdf',Class.get_courseware_pdf);   //获取课件的图片文件
router.get('/get-reference',Class.get_reference);   //获取推荐书目
router.get('/goodsrelated-detail',Class.goodsrelated_detail);   //获取新的产品详情
router.get('/goods-mediaattach',Class.goods_mediaattach);   //获取产品的视频清单
router.post('/set-attachrecord',Class.set_attachrecord);   //获取产品的视频清单
router.get('/class-video',Class.class_video);   //获取产品的视频清单
router.get('/get-lecturer',Class.get_lecturer);   //获取讲师
router.get('/get-branch',Class.get_branch);   //获取分院
router.get('/branch-list',Class.branch_list);   //分院列表
router.get('/branch-detail',Class.branch_detail);   //分院列表
router.post('/product-apply',Class.product_apply);   //课程报名
//活动
router.get('/activity-list',Activity.list);   //获取活动列表
router.get('/activity-detail',Activity.detail);   //获取活动列表
//专辑
router.get('/special-list',Special.list);   //获取专辑列表
router.get('/special-detail',Special.detail);   //获取专辑详情
router.get('/special-new-detail',Special.new_detail);   //获取专辑详情
router.get('/special-new-item-detail',Special.new_item_detail);   //获取专辑详情

//提问
router.get('/question-list',Class.is_vip,Question.list);   //获取问题列表
router.post('/question-assist',Question.question_assist);   //问题点赞
router.post('/question-unassist',Question.question_unassist);   //问题消点赞
router.post('/question-put',Question.question_put);   //用户提问

router.post('/question-putnouserid',Question.question_putnouserid);   //无身份时提交提问

router.get('/question-my',Question.question_my);   //获取我的问题 投票
router.get('/question-vote',Question.question_vote);   //获取我的问题 投票
router.post('/question-update',Question.question_update);   //提问更新
router.post('/del-question',Question.del_question);   //删除提问
//广告
router.get('/get-places',Places.get_places); //广告列表
//打赏
router.get('/reward-list',Reward.list);   //获取打赏
router.post('/reward-put',Reward.reward_put);   //打赏
//好友
router.get('/get-Myfriends',Myfriend.get_myfriends); //获取好友列表
router.get('/get-Mynewfriends',Myfriend.get_mynewfriends);
router.post('/add-Myfriends',Myfriend.add_myfriend); //添加我的好友
router.post('/delete-Myfriends',Myfriend.delete_myfriend); //删除我的好友
router.post('/add-Myblacklist',Myfriend.add_myblacklist); //设置黑名单
router.post('/set-myfriend',Myfriend.set_myfriend); //设置免打扰
router.post('/delete-mynewfriends',Myfriend.delete_mynewfriends);



//群组
router.get('/get-mygroup',Group.get_mygroup); //获取我的群组
router.get('/get-groupuser',Groupuser.get_groupuser); //获取群组成员
router.post('/set-mygroup',Group.set_mygroup); //设置我的群组
router.get('/get-groupbyid',Group.get_groupbyid); //根据id获取群组详情
router.get('/get-groupbygood',Group.get_groupbygood); //获取产品下的群组
router.get('/get-groupuserbygood',Groupuser.get_groupuserbygood); //获取产品下的用户
router.get('/get-groupbyusertype',Group.get_groupbyusertype); //获取院长本院群组
router.get('/get-mychats',Group.get_mychats); //获取我的群聊
router.get('/get-groupbyuserid',Group.get_groupbyuserid); //获取我的群组通过用户id和群组id

//投诉
router.post('/set-complaint',Complaint.set_complaint); //设置我的投诉

//邀请函
router.post('/set-invitationcard',InvitationCard.set_invitationcard); //邀请函
router.post('/invite-success',InvitationCard.invite_success); //邀请反馈
router.get('/get-invitationcards',InvitationCard.get_invitationcards); //获取邀请列表
router.get('/get-invitationcardbyid',InvitationCard.get_invitationcardbyid); //获取邀请列表

//配置
router.get('/get-init-config',Config.get_init_config); //获取配置信息
router.get('/get-diagram',Config.get_diagram); //获取启动图
router.get('/picker-view',Config.picker_view); //picker_view
router.get('/get-images',Config.get_images); //获取图片
//短信
router.post('/get-smscode',Sms.get_smscode); //获取短信验证码
router.post('/send-smsbytemplate',Sms.send_smsbytemplate); //发送短信验证码
//环信
router.get('/get-hxtoken',Hx.get_hxtoken); //获取token
router.get('/get-reghxuser',Hx.get_reghxuser); //获取用户
router.get('/get-deletehxuser',Hx.get_deletehxuser); //删除用户
router.get('/get-deletehxgroup',Hx.get_deletehxgroup); //删除群组
router.get('/get-createhxgroup',Hx.get_createhxgroup); //创建群组
router.get('/get-gethxgroupinfo',Hx.get_gethxgroupinfo); //查看群组详情
router.get('/get-addhxgroupuser',Hx.get_addhxgroupuser); //添加群组用户
router.get('/get-deletehxgroupuser',Hx.get_deletehxgroupuser); //删除群组用户
router.get('/get-sendmessages',Hx.get_sendmessages); //发送消息

//token
router.post('/add-devicetoken',Devicetoken.add_devicetoken); //记录用户token

//微信相关
router.get('/get-weixinpayurl',Pay.get_weixinpayurl); //获取微信支付地址
router.get('/get-weixingpayid',Pay.get_weixingpayid); //获取支付回调
router.get('/get-weixingopenid',Pay.get_weixingopenid); //获取支付回调
// router.get('/get-weixinginfo',Pay.get_weixinginfo); //获取微信账号信息

router.get('/get-jsapiticket',Pay.get_jsapiticket); //获取票据
router.post('/set-payorder',Pay.set_payorder); //设置支付订单
router.post('/set-weixingpayorder',Pay.set_weixingpayorder); //微信支付订单回掉
router.get('/get-payorders',Pay.get_payorders); //获取微信打赏列表
router.get('/get-payorderajax',Pay.payorder_ajax); //获取微信打赏列表

//栏目
router.get('/get-columnsbyid',Column.get_columnsbyid); //获取栏目列表
//媒咨
router.get('/get-mediasbycolumnid',Media.get_mediasbycolumnid); //获取栏目下的媒咨
router.get('/get-mediabyid',Media.get_mediabyid); //获取媒咨详情
router.get('/get-video',Media.get_video); //一个视频

router.post('/set-log',Felog.set_log); //一个视频
//获取设备token

module.exports = router;