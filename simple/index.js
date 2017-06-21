var sshpk = require('sshpk');

module.exports = function (context, req) {
  context.log('JavaScript HTTP trigger function processed request: ' + JSON.stringify(req));
  var certHeader = req.headers['x-arr-clientcert'];
  if (certHeader) {
    var parsed = sshpk.parseCertificate(Buffer.from(certHeader, 'base64'), 'x509');
    context.res = JSON.stringify(parsed.issuer);
  } else {
    context.res = {
      error: 'No client certificate found!'
    };
  }
  context.done();
};
