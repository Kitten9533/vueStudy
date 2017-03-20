(function($){
	$.fn.extend({
		"myalert": function(options){
            // var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            console.log("a");
		}
	});
	var defaults = {
		param:'red',
		param2: 'yellow'
	};
})(window.jQuery)