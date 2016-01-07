// moondragon without window object

var Moondragon = (function() {

	var _publics = {};
	var _content1 = 0;
	
	
	function forgeContent() {
		return "the content = " + _content1;
	}
	
	
	_publics.addContent = function(x) {
		_content1 = _content1 + x;
	}
	
	_publics.getContent = function() {
		return forgeContent();
	}
	

	return _publics;


})();
