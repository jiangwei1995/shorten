 var express = require('express');
 var app = express();
 var userAgent = require('express-useragent');

 app.use(userAgent.express());

 app.get('/oms*', function(req, res){
     if(req.useragent.isiPhone||req.useragent.isiPod||req.useragent.isiPad){
       res.send("IOS手机端正在建设中...");
     }else if(req.useragent.isAndroid){
       res.redirect('http://openbox.mobilem.360.cn/index/d/sid/3021133')
     }else{
       res.send("请使用Android或iPhone扫码");
     }

 });

 app.get('/*', function(req, res){
     if(req.useragent.isiPhone||req.useragent.isiPod||req.useragent.isiPad){
        res.send("IOS手机端正在建设中...");
     }else if(req.useragent.isAndroid){
       res.redirect('http://zhushou.360.cn/detail/index/soft_id/3007124')
     }else{
       res.send("请使用Android或iPhone扫码");
     }

 });

 app.listen(54677);
