项目名称：opencat

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/pro.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/pro.js
^https?:\/\/app-measurement\.com\/config\/app url reject
^https?:\/\/firestore\.googleapis\.com url reject

[mitm]
hostname = api.revenuecat.com, app-measurement.com, firestore.googleapis.com

*************************************/


const chxm1024 = {};
const { requestBody } = $request;
const headers = $request.headers;
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];


const list = {
	'OpenCat': { name: 'pro_lt', id: 'com.tk.client.lifetime', cm: 'sja' },  //opencat

};

try {
  if (typeof $response == "undefined") {
    delete headers["x-revenuecat-etag"];
    delete headers["X-RevenueCat-ETag"];
    chxm1024.headers = headers;
  } else if (chxm1023 && chxm1023.subscriber) {
    chxm1023.subscriber.subscriptions = com.tk.client.lifetime || {};
    chxm1023.subscriber.entitlements = com.tk.client.lifetime || {};
    let name,nameb,ids,idb,data;
    for (const src of [list, bundle]) {
     for (const i in src) {
      const test = src === list ? ua : bundle_id;
      if (new RegExp(`^${i}`, `i`).test(test)) {
        if (src[i].cm.indexOf('sja') != -1) {
          data = { "purchase_date": "2023-09-09T09:09:09Z", "expires_date": "2099-09-09T09:09:09Z" };
        } else if (src[i].cm.indexOf('sjb') != -1) {    
          data = { "purchase_date": "2023-09-09T09:09:09Z" };
        }
      ids = src[i].id;
      name = src[i].name;
      idb = src[i].idb;
      nameb = src[i].nameb;
      break;
      }
     }
    }
    if (!name || !ids) {
      data = { "purchase_date": "2023-09-09T09:09:09Z", "expires_date": "2099-09-09T09:09:09Z" };
      name = 'pro';
      ids = 'com.tk.client.lifetime';
    } 
    com.tk.client.lifetime[name] = Object.assign({}, data, { product_identifier: ids });
    if (typeof nameb !== 'undefined' && nameb !== null) {
      com.tk.client.lifetime[nameb] = Object.assign({}, data, { product_identifier: idb });
    }
    const subData = Object.assign({},data,{		"Author": "chxm1023",		"Telegram": "https://t.me/chxm1023",		"warning": "仅供学习，禁止转载或售卖",		"original_purchase_date": "2023-09-09T09:09:09Z",		"store_transaction_id" : "4900066666666666",		"period_type" : "trial",		"store": "app_store",		"ownership_type": "PURCHASED"	});
    chxm1023.subscriber.subscriptions[ids] = subData;
    if (typeof idb !== 'undefined' && idb !== null) {
      com.tk.client.lifetime[idb] = subData;
    }
    chxm1024.body = JSON.stringify(chxm1023);
    console.log('已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/chxm1023');
  } 
} catch(e) {
  //执行失败
  console.log('执行失败: '+ e.message); 
}

$done(chxm1024);