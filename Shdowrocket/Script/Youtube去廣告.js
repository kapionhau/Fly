/* 
更新時間:2021-12-12
Youtube去廣告
來源https://github.com/Choler/Surge/tree/master/Script
如果是YouTube Premium就不要開啟該腳本
好像太高版本出現中間廣告會無限重播
源地址未改
***************************
QuantumultX:

[rewrite_local]
^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A) url script-response-body https://choler.github.io/Surge/Script/YouTube.js,script-update-interval=0

[mitm]
hostname = *.googlevideo.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A) script-path=https://choler.github.io/Surge/Script/YouTube.js,script-update-interval=0,enable = true

[MITM]
hostname = *.googlevideo.com
***************************
Shadowrocket:

[Script]
YouTube去廣告 = type=http-request,pattern=^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A),script-path=https://choler.github.io/Surge/Script/YouTube.js,script-update-interval=0,enable = true
[MITM]
hostname = *.googlevideo.com

***************************/


if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 302, headers: { Location: url } } });
} else {
  $done({})
}
