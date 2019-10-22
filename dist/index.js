"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.onPrepare = () => {
    protractor_1.protractor.by.addLocator("grandParentOf", (selector, opt_parentElement) => {
        var using = opt_parentElement || document;
        const el = using.querySelectorAll(selector);
        const grandParents = [];
        el.forEach(_el => {
            grandParents.push(_el.parentElement.parentElement);
        });
        return grandParents;
    });
    protractor_1.protractor.by.addLocator("parentOf", (selector, opt_parentElement) => {
        var using = opt_parentElement || document;
        const el = using.querySelectorAll(selector);
        const _elements = [];
        el.forEach(_el => {
            _elements.push(_el.parentElement);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("nextSiblingOf", (selector, opt_parentElement) => {
        var using = opt_parentElement || document;
        const el = using.querySelectorAll(selector);
        const _elements = [];
        el.forEach(_el => {
            _elements.push(_el.nextElementSibling);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("followingSibling", (selector, opt_parentElement) => {
        let el;
        if (opt_parentElement) {
            el = opt_parentElement.parentElement.querySelectorAll(selector);
        }
        else {
            return "";
        }
        const _elements = [];
        el.forEach(_el => {
            if (_el.previousElementSibling === opt_parentElement) {
                _elements.push(_el);
            }
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("prevSiblingOf", (selector, opt_parentElement) => {
        var using = opt_parentElement || document;
        const el = using.querySelectorAll(selector);
        const _elements = [];
        el.forEach(_el => {
            _elements.push(_el.previousElementSibling);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("firstChildOf", (selector, opt_parentElement) => {
        var using = opt_parentElement || document;
        const el = using.querySelectorAll(selector);
        const _elements = [];
        el.forEach(_el => {
            _elements.push(_el.firstElementChild);
        });
        return _elements;
    });
    protractor_1.protractor.by.addLocator("lastChildOf", (selector, opt_parentElement) => {
        var using = opt_parentElement || document;
        const el = using.querySelectorAll(selector);
        const _elements = [];
        el.forEach(_el => {
            _elements.push(_el.lastElementChild);
        });
        return _elements;
    });
};
//# sourceMappingURL=index.js.map