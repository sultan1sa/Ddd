Name：browser teak + 

download：商店版本15.3.5.2



[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/pro.js


[MITM]

hostname = api.revenuecat.com


*/


let obj = {
  "request_date_ms": 1718926226877,
  "request_date": "2024-06-20T23:30:26Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-06-19T07:20:50Z",
    "original_application_version": "1",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.tk.client.lifetime": {
        "period_type": "normal",
        "store": "app_store",
        "purchase_date": "2023-09-09T09:09:09Z",
        "product_identifier": "com.tk.client.lifetime",
        "original_purchase_date": "2023-09-09T09:09:09Z",
        "ownership_type": "PURCHASED"
      },
      "com.tk.client.yearly": {
        "original_purchase_date": "2024-06-19T07:47:49Z",
        "expires_date": "2025-06-19T07:47:47Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "unsubscribe_detected_at": "2024-06-20T07:17:09Z",
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2024-06-19T07:47:47Z",
        "billing_issues_detected_at": null,
        "ownership_type": "FAMILY_SHARED",
        "store": "app_store",
        "store_transaction_id": "503569520478030934"
      }
    },
    "entitlements": {
      "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-06-19T07:47:47Z",
        "product_identifier": "com.tk.client.yearly",
        "expires_date": "2025-06-19T07:47:47Z"
      },
      "pro_lt": {
        "product_identifier": "com.tk.client.lifetime",
        "purchase_date": "2023-09-09T09:09:09Z"
      }
    },
    "original_purchase_date": "2023-08-14T07:12:59Z",
    "original_app_user_id": "$RCAnonymousID:4d29951568944a6bbd1f58478d458c1a",
    "last_seen": "2024-06-20T07:17:09Z"
  }
}
}
}



$done({ body: JSON.stringify(obj), status: 200 });