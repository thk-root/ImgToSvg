(function($) {
	$.fn.imgToSvg = function(args) {

		if(typeof args === 'undefined') args = {};

		const t = this;

		//Prepare configuration object
		t.config = {

			//Basic configuration
			findSelector: args.selector || null,
			cloneAttr: args.cloneAttr !== false,
			loadedClass: args.loadedClass || 'svg-loaded',

			removeSvgAttrs: args.removeSvgAttrs || ['width', 'height', 'src'],

			//Callbacks
			onLoad: args.onLoad || null,
			onError: args.onError || null

		};

		//Converts all elements
		t.convert = function() {

			//Iterate found images
			(t.config.findSelector ? t.find(t.config.findSelector) : t).each(function() {

				const $img = $(this);
				const src = $img.attr('src');

				//Skip images with invalid or missing src
				if(src) {

					//XHR fetch
					$.get(src, function(data) {

						const $svg = $(data).find('svg').removeAttr('xmlns:a');

						//Clone image's attributes to the svg elemenet
						if(t.config.cloneAttr) {
							$.each($img.prop('attributes'), function() {
								$svg.attr(this.name, this.value);
							});
						}

						//Remove any unwanted attributes
						if(t.config.removeSvgAttrs) {
							$svg.removeAttr(t.config.removeSvgAttrs.join(' '));
						}

						//Replace image element with SVG
						$img.replaceWith($svg);
						$img.addClass(t.config.loadedClass);

						if(typeof t.config.onLoad === 'function') {
							t.config.onLoad.apply(t, [$img]);
						}

					}, 'xml');

				}else{

					$img.addClass('svg-err');
					if(typeof t.config.onError === 'function') {
						t.config.onError.apply(t, [$img]);
					}

				}

			});

			return t;
		};

		return t.convert();
	}
})(jQuery);