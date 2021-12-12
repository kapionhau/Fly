/* 更新時間:2021-12-12
   來源https://github.com/Choler/Surge/tree/master/Script
   好像太新版本出現中間廣告會無限重播
*/

if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 302, headers: { Location: url } } });
} else {
  $done({})
}
