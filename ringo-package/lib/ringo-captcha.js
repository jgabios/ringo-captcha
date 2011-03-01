/**
 * @fileOverview captcha.
 * Provides jsonCaptcha function that generates a JSON response
 * to the browser with 1 member named img that holds base64 encoded jpeg binary image.
 * this can be used in the browser like this:
 * $('<img>').attr('src', 'data:image/jpeg;base64,' + imageData);
 * where imageData is the value for img key in he json object.
 * Before sending the response the text in the captcha image is stored in the session
 * and can be retrieved later, at validation phase, by inquiring the session.data.captcha string.
 *
 */

importClass(Packages.com.funqtional.util.Captcha);
var {Response} = require('ringo/webapp/response');

/**
 * @param Request usually a XHR request to get the captcha image
 * @return Response the response in json format {img: imageData}
 */
exports.jsonCaptcha(req) {
	var cap = new Captcha();
	var resp = {'img':cap.make()};
	req.session.data.captcha = cap.phrase();
	return Response.json(resp);
}
