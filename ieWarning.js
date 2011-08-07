(function($){
    $.fn.extend({ 

        ieWarning: function(options) {
 
            var defaults = {
                backgroundColor : '#000',
				imagesPath : 'js/ieWarning/images'
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
			
				var o = options;
                var obj = $(this);
				var windowWidth = $(window).width();
				var windowHeight = $(window).height();
				
				var template = '<div id="ieWarning_wrap" style="height:'+windowHeight+'px; width:'+windowWidth+'px;">'+
					'<div id="ieWarning_content">'+
						'<h2>Did you know that your Internet Explorer is out of date?</h2>'+
						'<p>To get the best possible experience using our website we recommend that you upgrade to a newer version or other web browser. '+
						'A list of the most popular web browsers can be found below.</p>'+
						'<p><strong>Just click on the icons to get to the download page</strong></p>'+
						'<div id="browser_wraps">'+
							'<a href="http://www.google.com/chrome"><img src="'+o.imagesPath+'/browser_chrome.gif" /></a>'+
							'<a href="http://www.mozilla.com/en-US/firefox/"><img src="'+o.imagesPath+'/browser_firefox.gif" /></a>'+
							'<a href="http://www.microsoft.com/windows/internet-explorer/default.aspx"><img src="'+o.imagesPath+'/browser_ie.gif" /></a>'+
							'<a href="http://www.opera.com/"><img src="'+o.imagesPath+'/browser_opera.gif" /></a>'+
							'<a href="http://www.apple.com/safari/"><img src="'+o.imagesPath+'/browser_safari.gif" /></a>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div id="ieWarning_background" style="background: '+o.backgroundColor+'; height:'+windowHeight+'px; width:'+windowWidth+'px;"></div>';
                
				$('body').append(template);
            });
        }
    });
})(jQuery);