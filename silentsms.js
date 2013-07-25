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

var observeResult = document.getElementById('observeResult');
var onsms = function(message) {
  observeResult.textContent = 'Got silence SMS from ' + message.sender +
                              ' -> ' + message.body;
};

function observeSilentSms() {
  var number = document.getElementById('observeNumber').value;
  observeResult.textContent = 'Observing messages from ' + number;
  mozPaymentProvider.observeSilentSms(number, onsms);
}

function removeSilentSmsObserver() {
  var number = document.getElementById('observeNumber').value;
  observeResult.textContent = '';
  mozPaymentProvider.removeSilentSmsObserver(number, onsms);
}
