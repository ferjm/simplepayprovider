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

var onsms = function(message) {
  var observeResult = document.getElementById('observeResult');
  observeResult.textContent = 'Got silence SMS from ' + message.sender +
                              ' -> ' + message.body;
};

function observeSilentSms() {
  var number = document.getElementById('observeNumber').value;
  var observeResult = document.getElementById('observeResult');
  observeResult.textContent = 'Observing messages from ' + number;
  mozPaymentProvider.observeSilentSms(number, onsms);
}

function removeSilentSmsObserver() {
  var number = document.getElementById('observeNumber').value;
  var observeResult = document.getElementById('observeResult');
  observeResult.textContent = '';
  mozPaymentProvider.removeSilentSmsObserver(number, onsms);
}
