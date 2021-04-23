# jQuery plugin for converting img to svg - ImgToSvg
Converts HTML img tags into svgs. Image SRCs still have to be in .svg format for plugin to work.

## Options
> #### selector
> (Optional) selector for targeting elements for conversion. Most likely you won't be needing this option.

> #### cloneAttr
> (Optional) Boolean indicating whether img element's attributes should be cloned onto the newly created svg element.

> #### loadedClass
> (Optional) Class to be appended on the svg element once loading is completed.

> #### removeSvgAttrs
> (Optional) Array of attribute names, which you want removed from newly created svg element.

> #### onLoad
> (Optional) Callback function to be called once (each) svg is loaded.

> #### onError
> (Optional) Callback function to be calle upon an error while loading svg or initialization.

## Example usage
><script src="/assets/js/svgs/imgtosvg.js"></script>

>$('img[src*=".svg"]').imgToSvg();
