#!nameperplexity 
#!descperplexity 
**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/incognito2.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/incognito2.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "unlock";
const appid = "com.overdesigned.incognito.lifetime";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
  chxm1024.subscriber.subscriptions = chxm1024.subscriber.subscriptions || {};
  chxm1024.subscriber.entitlements = chxm1024.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  chxm1024.subscriber.entitlements[(name)] = (data);
  chxm1024.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "chxm1023",	"Telegram": "https://t.me/chxm1023",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  chxm1023.body = JSON.stringify(chxm1024);
}

$done(chxm1023);