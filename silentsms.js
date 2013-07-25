function sendSilentSms() {
  var number = document.getElementById('sendNumber').value;
  var sendResult = document.getElementById('sendResult');
  var req = mozPaymentProvider.sendSilentSms(number, 'Silence!');
  req.onsuccess = function() {
    sendResult.textContent = 'Successfully sent silent sms! \o/';
  };
  req.onerror = function() {
    sendResult.textContent = 'Damn it! ' + req.error.name;
  };
}


function observeSilentSms() {
  var number = document.getElementById('observeNumber').value;
  var observeResult = deocument.getElementById('observeResult');
  mozPaymentProvider.observeSilentSms(number, function(message) {
    observeResult.textContent = 'Got silence SMS from ' + message.sender +
                                ' -> ' + message.body;
  });
}
