$.fn.center = function (options) {
	var inside_el = null;
	if(options instanceof jQuery) {
		inside_el = options;
		options = null
	}

	options = options || {}
	options.this = options.this || {}
	options.inside = options.inside || {}

	if (options.this.h == null) options.this.h = 0.5
	if (options.this.v == null) options.this.v = 0.5

	options.inside.el = $(options.inside.el || inside_el || this.parent())
	if (options.inside.h == null) options.inside.h = 0.5
	if (options.inside.v == null) options.inside.v = 0.5

	if (options.hOffset == null) options.hOffset = 0;
	if (options.vOffset == null) options.vOffset = 0;

	this.css("position","absolute");

	this.css("left", (options.inside.el.width() * options.inside.h - this.width() * options.this.h + options.hOffset) + "px");

	this.css("top", (options.inside.el.height() * options.inside.v - this.height() * options.this.v + options.vOffset)  + "px");

	return this;
}
