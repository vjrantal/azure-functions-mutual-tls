var index = require('./index.js');

var context = {
  log: console.log,
  done: function () {
    console.log(context.res);
  }
};

index(context, {
  headers: {
    'x-arr-clientcert': 'MIIEOTCCAyGgAwIBAgIJANtvcwifHC1SMA0GCSqGSIb3DQEBBQUAMHAxCzAJBgNVBAYTAkZJMRYwFAYDVQQIEw1WaWxsZS1SYW50YWxhMRAwDgYDVQQHEwdNaWtrZWxpMRIwEAYDVQQKEwlNaWNyb3NvZnQxCzAJBgNVBAsTAkRYMRYwFAYDVQQDEw1WaWxsZSBSYW50YWxhMB4XDTE3MDYyMDE0MjgyMFoXDTE4MDYyMDE0MjgyMFowcDELMAkGA1UEBhMCRkkxFjAUBgNVBAgTDVZpbGxlLVJhbnRhbGExEDAOBgNVBAcTB01pa2tlbGkxEjAQBgNVBAoTCU1pY3Jvc29mdDELMAkGA1UECxMCRFgxFjAUBgNVBAMTDVZpbGxlIFJhbnRhbGEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC224DtPkQDGVrzqaTmCUYbcannoK6gYdlnwmAEEdpO+A6bQRfCe53XLmgQNLskNf3ijslKdqpENoLAuWn5yiEZm+89LUCImLXdhocMCG48NpJM3UMF9suQZYKRB0fCDDYoeFRDfOgs5isTtkDq4nPg3vtJbRS2UY4Dsjbk65qWg8MFyhmMqJbRHwEkhjENp2IifrRdQvliNRgsb/XkPw8U698UaXkFSyA9zPGHiaTSNOFMIKud+XBGuwPEydUzdv45FYgtByd3BLtCw5Mzg8bj2yNqrEqFOmV9dY+Jh1kvAn1QFmuaWciaP+55WBrEyf7rQQb1wrGWRD5KwxAcjrlHAgMBAAGjgdUwgdIwHQYDVR0OBBYEFJ9iPgXz+5/zcqqpbs3w3nbJExlMMIGiBgNVHSMEgZowgZeAFJ9iPgXz+5/zcqqpbs3w3nbJExlMoXSkcjBwMQswCQYDVQQGEwJGSTEWMBQGA1UECBMNVmlsbGUtUmFudGFsYTEQMA4GA1UEBxMHTWlra2VsaTESMBAGA1UEChMJTWljcm9zb2Z0MQswCQYDVQQLEwJEWDEWMBQGA1UEAxMNVmlsbGUgUmFudGFsYYIJANtvcwifHC1SMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBAJQRBxVmO55rFuomfcIYX7KUUzvMDDin8SEm3WZfAOtbhTZ+LuM9nSaVekmohH0yQnC1VKpqAwm8sJOxgYtihvpsTc/1qUGUWu1R4rq2Ox9RAaVQAYdJwh9GWp0a7EtvpZkdUTrT6qvkQ8JqbCfW8i90rNit5HIaSG1uogVUvffVbjMgnBIXR14q7sCXrorVYZBEx1pMegWTKajH42VXfxXayi7KG6kKQixgkGfCTV6Kne2kETPimdcrcJIJMM0MqO1LQW5TcUQXt7KmFE9yjNRucU59VaucI3N1lBVbkhfJVKIe+f1fHV8giknTPHku6cU7dPJi+zFVzLPn+G9X8Tw='
  }
});