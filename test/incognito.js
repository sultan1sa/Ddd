圈X:

[rewrite_local]

通用订阅解锁
^https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/incognito.js

[mitm]
hostname = api.revenuecat.com

*/

var obj = {"request_date":"2020-02-15T07:09:49Z",
  "request_date_ms":"1581750589992",
  "subscriber":{
    "entitlements":{
      "premium":{
        "expires_date":"2099-09-09T07:07:58Z",
      "product_identifier":"com.overdesigned.incognito.lifetime",
      "purchase_date":"2020-02-15T07:07:58Z"}
      },
      "first_seen":"2020-02-14T20:28:01Z",
      "last_seen":"2020-02-14T20:28:01Z",
      "non_subscriptions":{},
      "original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60",
      "original_application_version":"216",
      "original_purchase_date":"2020-02-14T20:26:59Z",
      "other_purchases":{},
      "subscriptions":{
        "com.overdesigned.incognito.lifetime":{
          "billing_issues_detected_at":null,
          "expires_date":"2099-09-09T07:07:58Z",
          "is_sandbox":false,
"original_purchase_date":"2020-02-15T07:07:58Z",
          "period_type":"normal",
          "purchase_date":"2020-02-15T07:07:58Z",
          "store":"app_store",
          "unsubscribe_detected_at":null}
          }
      }
 }
$done({body: JSON.stringify(obj)});