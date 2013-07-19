"user strict"

const mockJWT = "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJhdWQiOiAibWFya2V0cGxhY2UtZGV2LmFsbGl6b20ub3JnIiwgImlzcyI6ICI2NDBhZTQ3Ny1kZjMzLTQ1Y2QtODNiOC02ZjFmOTEwYTY0OTQiLCAicmVxdWVzdCI6IHsiZGVzY3JpcHRpb24iOiAiZGV0YWlsZWQgZGVzY3JpcHRpb24iLCAiaWQiOiAiYjFkOGZmODEtZTNlNi00YzAzLThkNjYtZjcyNDgwYzM0ZmU0IiwgInBvc3RiYWNrVVJMIjogImh0dHA6Ly9pbmFwcC1wYXktdGVzdC5mYXJtZGV2LmNvbS9wb3N0YmFjayIsICJwcm9kdWN0RGF0YSI6ICJ0cmFuc2FjdGlvbl9pZD0xNjAiLCAicHJpY2VQb2ludCI6IDEsICJjaGFyZ2ViYWNrVVJMIjogImh0dHA6Ly9pbmFwcC1wYXktdGVzdC5mYXJtZGV2LmNvbS9jaGFyZ2ViYWNrIiwgIm5hbWUiOiAiVGhlIFByb2R1Y3QifSwgImV4cCI6IDEzNjI2NjU5NTcsICJpYXQiOiAxMzYyNjYyMzU3LCAidHlwIjogImZlcmptL3BheW1lbnQvdGVzdHMifQ.91vFdbEwaEcGGNyw7w_TphSKj2RHOMX_mUYQhlO1STQ";

function pay(JWTs) {        
  var request = navigator.mozPay(JWTs);
  request.onsuccess = function onsuccess() {
    console.log("onsuccess received");
    document.getElementById("result").innerHTML = "Payment success";
  };
  request.onerror = function onerror() {
    console.log("onerror received");
    document.getElementById("result").innerHTML = "Payment error " + request.error.name;
  };
}

function showICC(icc) {
  console.log("ICC " + icc[0]);
}

function sendSilentSms() {
  var req = mozPaymentProvider.sendSilentSms('666201466', 'Silence, I kill you!');
  req.onsuccess = function() {
    console.log("Successfully sent silent sms! \o/");
  };
  req.onerror = function() {
    console.log("Damn it! " + req.error.name);
  };
}

function observeSilentSms() {
  mozPaymentProvider.observeSilentSms('666201466', function(message) {
    console.log("Got silence SMS " + message);
  });
}
