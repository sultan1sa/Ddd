/* 


Name：browser incognito + 

download：商店版本15.3.5.2



[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/gk.js


[MITM]

hostname = api.revenuecat.com


*/


let obj = {
  "request_date_ms": 1718917241275,
  "request_date": "2024-06-20T21:00:41Z",
  "subscriber": {
    "non_subscriptions": {
      "com.overdesigned.incognito.lifetime": [
        {
          "id": "d1ef312e90",
          "is_sandbox": true,
          "purchase_date": "2024-02-09T07:01:12Z",
          "original_purchase_date": "2024-02-09T07:01:12Z",
          "store": "app_store",
          "store_transaction_id": "2000000520358890"
        },
        {
          "id": "cf8a02e3dc",
          "is_sandbox": true,
          "purchase_date": "2024-03-05T05:31:47Z",
          "original_purchase_date": "2024-03-05T05:31:47Z",
          "store": "app_store",
          "store_transaction_id": "2000000539953882"
        }
      ]
    },
    "first_seen": "2023-12-25T20:40:58Z",
    "original_application_version": "1.0",
    "other_purchases": {
      "com.overdesigned.incognito.lifetime": {
        "purchase_date": "2024-03-05T05:31:47Z"
      }
    },
    "management_url": null,
    "subscriptions": {},
    "entitlements": {
      "unlock": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-03-05T05:31:47Z",
        "product_identifier": "com.overdesigned.incognito.lifetime",
        "expires_date": null
      }
    },
    "original_purchase_date": "2023-12-25T20:41:56Z",
    "original_app_user_id": "$RCAnonymousID:4d730e5deb6b4b73bcefe0ddc81dfb18",
    "last_seen": "2024-06-20T06:28:40Z"
  }
}
}



$done({ body: JSON.stringify(obj), status: 200 });
