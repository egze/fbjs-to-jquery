if(typeof(Facebook) == "undefined"){
	
	document.write('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>');
	
	var Animation = jQuery;
	
	Animation.fn.duration = function(){
		return this;
	};
	
	Animation.fn.go = function(){
		return this;
	};
	
	Animation.fn.to = function(what, how){
		var css = {};
		css[what] = how;
		return this.animate(css);
	};
	
	Animation.fn.duration = function(){
		return this;
	};
	
	Element.prototype.addClassName = function(_class) {
		return $(this).addClass(_class);
	};
	
	Element.prototype.removeClassName = function(_class) {
		return $(this).removeClass(_class);
	};
	
	Element.prototype.hasClassName = function(_class) {
		return $(this).hasClass(_class);
	};
}