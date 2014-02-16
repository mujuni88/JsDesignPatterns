var jb = jb || {};

jb.ut = (function () {
    "use strict";

	// returns true if obj is empty or false if otherwise
	function isObjEmpty(obj) {
        if(!obj)
            return false;

		return (Object.keys(obj).length === 0);
	}


	return {
		isObjEmpty: isObjEmpty
	};
})();