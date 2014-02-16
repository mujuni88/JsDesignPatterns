define(function () {
    "use strict";

	// check for user data or redirect user back to the index page
	// accepts: http urls or names of the pages without'/' in the beginning.
	// eg (http://www.google.com, menu/index.html or index.html)
	function redirect(url) {
		if (!url) {
            return;
        }

		var href = window.location.href,
			httpPattern = /^http/i,
			htmlPattern = /\w+.html$/i,
			replaceString = "";

		if (!httpPattern.test(url)) {
			if (!htmlPattern.test(href)) {return;}

			replaceString = href.match(htmlPattern);
			window.location.replace(href.replace(replaceString, url));
		} else {
			window.location.replace(url);
		}


	}

	// returns true if obj is empty or false if otherwise
	function isObjEmpty(obj) {
		return (Object.keys(obj).length === 0);
	}


	return {
		redirect: redirect,
		isObjEmpty: isObjEmpty
	};
});