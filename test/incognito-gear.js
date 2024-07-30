#!name=incognito-gear
#!desc=incognito-gear

[Script]
incognitogesr = type=http-response, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/incognito-gear.js, requires-body=true, max-size=-1, timeout=60

incognitogear = type=http-request, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/incognito-gear.js, timeout=60

revenuecat = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/sultan1sa/Ddd/main/test/incognito-gear.js, timeout=60

replaceHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$, script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-header.js, timeout=30, argument=(%5Cr%5Cn)X-RevenueCat-ETag%3A.%2B(%5Cr%5Cn)-%3E%241X-RevenueCat-ETag%3A%242

[MITM]
hostname = api.revenuecat.com