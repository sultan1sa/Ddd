#!nameperplexity 
#!descperplexity 
**************************************
 
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/perplexity/perplexity2.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/perplexity/perplexity2.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "";
const appid = "";

[mitm]

hostname = api.revenuecat.com

*/
let obj = {

    "request_date_ms": 1704664060864,
    "request_date": "2024-01-07T21:47:40Z",
    "subscriber": {
        "subscriptions": {},
        "first_seen": "2024-01-07T21:42:02Z",
        // GENERATED BY SGFRC By D3WXY
        "original_application_version": "1",
        "other_purchases": {},
        "management_url": null,
        // GENERATED BY SGFRC By D3WXY
        "subscriptions": {
            "pro_20_m": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            },
            "pro_20_m": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            }
        },
        "entitlements": {
            "Perplexity Pro": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "pro_20_m"
            },
            "Perplexity Pro": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "pro_20_m"
            }
        },
        "original_purchase_date": "2024-01-07T21:38:41Z",
        // GENERATED BY SGFRC By D3WXY
        "original_app_user_id": "pro_20_m",
        "last_seen": "2024-01-07T21:42:02Z"
    }
};
$done({response: {body: JSON.stringify(obj), status: 200}});
// GENERATED BY SGFRC By D3WXY