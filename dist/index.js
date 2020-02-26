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
        var index = 0;
        if (opt_parentElement) {
            el = opt_parentElement.parentElement.querySelectorAll(selector);
            index = Array.prototype.indexOf.call(el, opt_parentElement);
        }
        else {
            return "";
        }
        var _elements = [];
        Array.prototype.filter.call(el, function (_el, i) {
            if (i > index && _el !== opt_parentElement) {
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
    protractor_1.ElementFinder.prototype.grandParent = function () {
        return protractor_1.browser.driver.executeScript("return arguments[0].parentElement.parentElement;", this.getWebElement());
    };
    protractor_1.ElementArrayFinder.prototype.grandParent = function () {
        return this.filter(function (element) {
            console.log("i am 1");
            return protractor_1.browser
                .executeScript("return arguments[0].parentElement.parentElement;", element)
                .then(function (value) {
                console.log("i am 2");
                return value;
            });
        }).first();
    };
    protractor_1.ElementFinder.prototype.parent = function () {
        return protractor_1.browser.executeScript("return arguments[0].parentElement;", this);
    };
    protractor_1.ElementArrayFinder.prototype.parent = function () {
        return this.all(protractor_1.browser.executeScript("return arguments[0].parentElement;", this));
    };
    protractor_1.ElementFinder.prototype.nextSibling = function () {
        return protractor_1.browser.executeScript("return arguments[0].nextElementSibling;", this);
    };
    protractor_1.ElementArrayFinder.prototype.nextSibling = function () {
        return this.all(protractor_1.browser.executeScript("return arguments[0].nextElementSibling;", this));
    };
    protractor_1.ElementFinder.prototype.prevSibling = function () {
        return protractor_1.browser.executeScript("return arguments[0].previousElementSibling;", this);
    };
    protractor_1.ElementArrayFinder.prototype.prevSibling = function () {
        return this.all(protractor_1.browser.executeScript("return arguments[0].previousElementSibling;", this));
    };
    protractor_1.ElementFinder.prototype.firstChild = function () {
        return protractor_1.browser.executeScript("return arguments[0].firstElementChild;", this);
    };
    protractor_1.ElementArrayFinder.prototype.firstChild = function () {
        return this.all(protractor_1.browser.executeScript("return arguments[0].firstElementChild;", this));
    };
    protractor_1.ElementFinder.prototype.lastChild = function () {
        return protractor_1.browser.executeScript("return arguments[0].lastElementChild;", this);
    };
    protractor_1.ElementArrayFinder.prototype.lastChild = function () {
        return this.all(protractor_1.browser.executeScript("return arguments[0].lastElementChild;", this));
    };
};
//# sourceMappingURL=index.js.map