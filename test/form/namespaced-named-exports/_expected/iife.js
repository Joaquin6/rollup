this.foo = this.foo || {};
this.foo.bar = this.foo.bar || {};
(function (exports) {
	'use strict';

	var answer = 42;

	exports.answer = answer;

}((this.foo.bar.baz = this.foo.bar.baz || {})));
