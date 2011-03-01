include('ringo/unittest');
var captcha = require('ringo-captcha');

exports.testCaptcha = function () {
    assertTrue(true);
};

if (require.main == module.id) {
    require('ringo/unittest').run(exports);
}
