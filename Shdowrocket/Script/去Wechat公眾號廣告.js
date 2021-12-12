/*
Wechat 去除公眾號底部文章
***************************
QuantumultX:
[rewrite_local]
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/kapionhau/Fly/main/Shdowrocket/Script/去Wechat公眾號廣告.js
[mitm]
hostname = mp.weixin.qq.com
***************************
Surge4 or Loon:
[Script]
http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/kapionhau/Fly/main/Shdowrocket/Script/去Wechat公眾號廣告.js
[MITM]
hostname = mp.weixin.qq.com
**************************/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
