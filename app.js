 var express = require('express');
 var app = express();
 var userAgent = require('express-useragent');

 app.use(userAgent.express());

 app.get('/oms*', function(req, res){
     if(req.useragent.isiPhone||req.useragent.isiPod||req.useragent.isiPad){
       res.redirect("https://itunes.apple.com/cn/app/zhong-nong-huo-ban-ding-dan/id1016821680?mt=8");
     }else if(req.useragent.isAndroid){
       res.redirect('http://openbox.mobilem.360.cn/index/d/sid/3021133')
     }else{
       res.send("请使用Android或iPhone扫码");
     }

 });

 app.get('/*', function(req, res){
     if(req.useragent.isiPhone||req.useragent.isiPod||req.useragent.isiPad){
        res.redirect("https://itunes.apple.com/cn/app/nong-hui-wang/id1008627120?mt=8");
     }else if(req.useragent.isAndroid){
       res.redirect('http://zhushou.360.cn/detail/index/soft_id/3007124')
     }else{
       res.send("请使用Android或iPhone扫码");
     }

 });

 app.listen(54677);
