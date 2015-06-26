 var express = require('express');
 var app = express();
 var userAgent = require('express-useragent');

 app.use(userAgent.express());
 app.get('/*', function(req, res){
     if(req.useragent.isiPhone||req.useragent.isiPod||req.useragent.isiPad){
       res.redirect('itms-services://?action=download-manifest&url=https://gengen1988.github.io/cordova-remote-crosswalk/app.plist');
     }else if(req.useragent.isAndroid){
       res.redirect('http://zhushou.360.cn/detail/index/soft_id/3007124')
     }else{
       res.send("请使用Android或iPhone扫码");
     }

 });
 app.listen(54677);
