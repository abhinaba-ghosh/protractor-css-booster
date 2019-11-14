"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.onPrepare = function () {
    protractor_1.protractor.by.addLocator("grandParentOf", function (selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var el = using.querySelectorAll(selector);
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            _elements.push(_el.parentElement.parentElement);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("parentOf", function (selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var el = using.querySelectorAll(selector);
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            _elements.push(_el.parentElement);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("nextSiblingOf", function (selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var el = using.querySelectorAll(selector);
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            _elements.push(_el.nextElementSibling);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("followingSibling", function (selector, opt_parentElement) {
        var el;
        if (opt_parentElement) {
            el = opt_parentElement.parentElement.querySelectorAll(selector);
        }
        else {
            return "";
        }
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            if (_el.previousElementSibling === opt_parentElement) {
                _elements.push(_el);
            }
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("prevSiblingOf", function (selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var el = using.querySelectorAll(selector);
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            _elements.push(_el.previousElementSibling);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("firstChildOf", function (selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var el = using.querySelectorAll(selector);
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            _elements.push(_el.firstElementChild);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("lastChildOf", function (selector, opt_parentElement) {
        var using = opt_parentElement || document;
        var el = using.querySelectorAll(selector);
        var _elements = [];
        Array.prototype.filter.call(el, function (_el) {
            _elements.push(_el.lastElementChild);
        });
        return _elements;
    });
};
//# sourceMappingURL=index.js.map