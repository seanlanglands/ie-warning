IE Warning
=============

A simple modal alert that triggers when the visitor is using Internet Explorer 6, informs visitors of their out-of-date browser and offers modern browser links. 

Implementation
-------

Place this block of code right before the closing <body> tag.

	<!--[if IE 6]>
    	<script type="text/javascript" src="ieWarning.js"></script>
    	<link rel="stylesheet" type="text/css" media="all" href="ieWarning.css" />
    
    	<script type="text/javascript">
        	jQuery(document).ready(function() {
            		jQuery(document).ieWarning({
                		backgroundColor : '#000',
                		imagesPath : 'images'
            		});
        	});
    	</script>
	<![endif]-->