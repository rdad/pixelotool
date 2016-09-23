/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pixelotool = __webpack_require__(1);
	
	var pixelotool = _interopRequireWildcard(_pixelotool);
	
	var _program = __webpack_require__(7);
	
	var _program2 = _interopRequireDefault(_program);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	document.addEventListener("DOMContentLoaded", function (event) {
	
	        var config = {
	                prepare_document: true
	        };
	
	        pixelotool.init(config).run(_program2.default);
	});
	
	window.pot = pixelotool; // debug

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.canvas = undefined;
	exports.init = init;
	exports.run = run;
	
	var _config = __webpack_require__(2);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _canvas = __webpack_require__(3);
	
	var canvasManager = _interopRequireWildcard(_canvas);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canvas = exports.canvas = canvasManager;
	
	function init() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	
	    canvas.init(options);
	
	    console.log('pot.init : appli ready');
	    return this;
	}
	
	function run(program) {
	
	    console.log('pot.run started ...');
	    program(this);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: "pixelotool",
	    version: "0.1",
	    status: 'development',
	    screen: {
	        width: 0,
	        height: 0
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = init;
	exports.create = create;
	
	var _canvas = __webpack_require__(4);
	
	var _canvas2 = _interopRequireDefault(_canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canvas_list = [],
	    config = {};
	
	function init() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	
	    // body preparation
	
	    if (options.prepare_document && options.prepare_document === true) {
	        document.body.style.margin = 0;
	        document.body.style.overflow = 'hidden';
	    }
	
	    // screen dimension
	
	    config.screen = {
	        width: window.top.innerWidth,
	        height: window.top.innerHeight
	    };
	
	    console.log('canvas manager: ready');
	}
	
	function create() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	
	    return new Promise(function (resolve) {
	        options.id = canvas_list.length;
	        options.width = options.width || config.screen.width;
	        options.height = options.height || config.screen.height;
	
	        var c = new _canvas2.default(options);
	        canvas_list.push(c);
	
	        console.log('canvas ' + options.id + ' create');
	
	        resolve(c);
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Canvas = function () {
	    function Canvas() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Canvas);
	
	        this.id = options.id;
	
	        this.$el = document.createElement('canvas');
	        this.$el.id = options.name || 'canvas_' + this.id;
	
	        this.width = options.width;
	        this.height = options.height;
	
	        this.$el.setAttribute('width', this.width);
	        this.$el.setAttribute('height', this.height);
	
	        this.ctx = this.$el.getContext('2d');
	
	        // Image
	
	        if (options.image) {
	            this.addImage(options.image);
	        }
	    }
	
	    _createClass(Canvas, [{
	        key: 'applyEachPixel',
	        value: function applyEachPixel(pixel_filter) {
	            var _this = this;
	
	            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	
	            return new Promise(function (resolve) {
	
	                var pixels = _this.getImageData();
	
	                for (var i = 0; i < pixels.data.length; i += 4) {
	
	                    var p = pixel_filter(pixels.data[i], pixels.data[i + 1], pixels.data[i + 2], options);
	
	                    pixels.data[i] = p.r;
	                    pixels.data[i + 1] = p.g;
	                    pixels.data[i + 2] = p.b;
	                }
	
	                _this.ctx.putImageData(pixels, 0, 0);
	                resolve(_this);
	            });
	        }
	    }, {
	        key: 'getImageData',
	        value: function getImageData() {
	            return this.ctx.getImageData(0, 0, this.width, this.height);
	        }
	    }, {
	        key: 'addImage',
	        value: function addImage(path) {
	            var _this2 = this;
	
	            return new Promise(function (resolve) {
	                var img = new Image();
	
	                img.onload = function () {
	                    _this2.ctx.drawImage(img, 0, 0, _this2.width, _this2.height);
	                    resolve(_this2);
	                };
	                img.src = path;
	            });
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
	            this.ctx.fillRect(0, 0, this.width, this.height);
	            return this;
	        }
	    }, {
	        key: 'toScreen',
	        value: function toScreen() {
	            document.body.appendChild(this.$el);
	            return this;
	        }
	    }]);
	
	    return Canvas;
	}();
	
	exports.default = Canvas;

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (pot) {
	
	    pot.canvas.create().then(function (c) {
	        return c.addImage('asset/schoolboyq.png');
	    }).then(function (c) {
	        return c.applyEachPixel(_filter2.default.grayscale);
	    }).then(function (c) {
	        return c.applyEachPixel(_filter2.default.threshold_light, 130);
	    }).then(function (c) {
	        return c.toScreen();
	    });
	
	    console.log('Program is ended');
	};
	
	var _filter = __webpack_require__(8);
	
	var _filter2 = _interopRequireDefault(_filter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	
	    grayscale: function grayscale(r, g, b) {
	        var v = 0.2126 * r + 0.7152 + g + 0.0722 * b;
	        return { r: v, g: v, b: v };
	    },
	
	    threshold: function threshold(r, g, b, config) {
	        return r > config.r && g > config.g && b > config.b ? { r: r, g: g, b: b } : { r: 0, g: 0, b: 0 };
	    },
	    threshold_light: function threshold_light(r, g, b, light) {
	        return (r + g + b) / 3 > light ? { r: r, g: g, b: b } : { r: 0, g: 0, b: 0 };
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app-bundle.js.map