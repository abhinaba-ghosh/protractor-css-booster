import {
  protractor,
  ElementArrayFinder,
  ElementFinder,
  browser
} from "protractor";

/* onPrepare will be hooked to protractor configuration file and make the ReactSelector component ready before test starts
 */
export const onPrepare = () => {
  protractor.by.addLocator(
    "grandParentOf",
    (selector: string, opt_parentElement: any) => {
      var using = opt_parentElement || document;
      const el: NodeListOf<Element> = using.querySelectorAll(selector);
      const _elements: any[] = [];
      Array.prototype.filter.call(el, _el => {
        _elements.push(_el.parentElement.parentElement);
      });
      return _elements;
    }
  );

  protractor.by.addLocator(
    "parentOf",
    (selector: string, opt_parentElement: any) => {
      var using = opt_parentElement || document;
      const el: NodeListOf<Element> = using.querySelectorAll(selector);
      const _elements: any[] = [];
      Array.prototype.filter.call(el, _el => {
        _elements.push(_el.parentElement);
      });
      return _elements;
    }
  );

  protractor.by.addLocator(
    "nextSiblingOf",
    (selector: string, opt_parentElement: any) => {
      var using = opt_parentElement || document;
      const el: NodeListOf<Element> = using.querySelectorAll(selector);
      const _elements: any[] = [];
      Array.prototype.filter.call(el, _el => {
        _elements.push(_el.nextElementSibling);
      });
      return _elements;
    }
  );

  protractor.by.addLocator(
    "followingSibling",
    (selector: string, opt_parentElement: any) => {
      let el: NodeListOf<Element>;
      let index: number = 0;
      if (opt_parentElement) {
        el = opt_parentElement.parentElement.querySelectorAll(selector);
        index = Array.prototype.indexOf.call(el, opt_parentElement);
      } else {
        return "";
      }
      const _elements: any[] = [];
      Array.prototype.filter.call(el, (_el, i) => {
        // _elements.push(_el);

        if (i > index && _el !== opt_parentElement) {
          _elements.push(_el);
        }
      });
      return _elements;
    }
  );

  protractor.by.addLocator(
    "prevSiblingOf",
    (selector: string, opt_parentElement: any) => {
      var using = opt_parentElement || document;
      const el: NodeListOf<Element> = using.querySelectorAll(selector);
      const _elements: any[] = [];
      Array.prototype.filter.call(el, _el => {
        _elements.push(_el.previousElementSibling);
      });
      return _elements;
    }
  );

  protractor.by.addLocator(
    "firstChildOf",
    (selector: string, opt_parentElement: any) => {
      var using = opt_parentElement || document;
      const el: NodeListOf<Element> = using.querySelectorAll(selector);
      const _elements: any[] = [];
      Array.prototype.filter.call(el, _el => {
        _elements.push(_el.firstElementChild);
      });
      return _elements;
    }
  );

  protractor.by.addLocator(
    "lastChildOf",
    (selector: string, opt_parentElement: any) => {
      var using = opt_parentElement || document;
      const el: NodeListOf<Element> = using.querySelectorAll(selector);
      const _elements: any[] = [];
      Array.prototype.filter.call(el, _el => {
        _elements.push(_el.lastElementChild);
      });
      return _elements;
    }
  );

  /**
   * Returns the grand parent element of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element(by.css('.items li')).grandParent();
   * targetElement.click();
   *
   * @returns {Promise<ElementFinder>}
   */
  ElementFinder.prototype.grandParent = function() {
    return browser.executeScript(
      "return arguments[0].parentElement.parentElement;",
      this
    );
  };

  /**
   * Returns the list of grand parent elements of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element.all(by.css('.items li')).grandParent();
   * targetElement.get(1).click();
   *
   * @returns {Promise<ElementArrayFinder>}
   */
  ElementArrayFinder.prototype.grandParent = function() {
    return this.all(
      browser.executeScript(
        "return arguments[0].parentElement.parentElement;",
        this
      )
    );
  };

  /**
   * Returns the parent element of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element(by.css('.items li')).parent();
   * targetElement..click();
   *
   * @returns {Promise<ElementFinder>}
   */
  ElementFinder.prototype.parent = function() {
    return browser.executeScript("return arguments[0].parentElement;", this);
  };

  /**
   * Returns the list of parent elements of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element.all(by.css('.items li')).parent();
   * targetElement.get(1).click();
   *
   * @returns {Promise<ElementArrayFinder>}
   */
  ElementArrayFinder.prototype.parent = function() {
    return this.all(
      browser.executeScript("return arguments[0].parentElement;", this)
    );
  };

  /**
   * Returns the next sibling / following sibling element of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element(by.css('.items li')).nextSibling();
   * targetElement..click();
   *
   * @returns {Promise<ElementFinder>}
   */
  ElementFinder.prototype.nextSibling = function() {
    return browser.executeScript(
      "return arguments[0].nextElementSibling;",
      this
    );
  };

  /**
   * Returns the list of next sibling / following sibling elements of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element.all(by.css('.items li')).nextSibling();
   * targetElement.get(1).click();
   *
   * @returns {Promise<ElementArrayFinder>}
   */
  ElementArrayFinder.prototype.nextSibling = function() {
    return this.all(
      browser.executeScript("return arguments[0].nextElementSibling;", this)
    );
  };

  /**
   * Returns the previous sibling element of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element(by.css('.items li')).prevSibling();
   * targetElement..click();
   *
   * @returns {Promise<ElementFinder>}
   */
  ElementFinder.prototype.prevSibling = function() {
    return browser.executeScript(
      "return arguments[0].previousElementSibling;",
      this
    );
  };

  /**
   * Returns the list of previous sibling elements of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element.all(by.css('.items li')).prevSibling();
   * targetElement.get(1).click();
   *
   * @returns {Promise<ElementArrayFinder>}
   */
  ElementArrayFinder.prototype.prevSibling = function() {
    return this.all(
      browser.executeScript("return arguments[0].previousElementSibling;", this)
    );
  };

  /**
   * Returns the first element of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element(by.css('div')).firstChild();
   * targetElement..click();
   *
   * @returns {Promise<ElementFinder>}
   */
  ElementFinder.prototype.firstChild = function() {
    return browser.executeScript(
      "return arguments[0].firstElementChild;",
      this
    );
  };

  /**
   * Returns the list of firstChild elements of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element.all(by.css('div')).firstChild();
   * targetElement.get(1).click();
   *
   * @returns {Promise<ElementArrayFinder>}
   */
  ElementArrayFinder.prototype.firstChild = function() {
    return this.all(
      browser.executeScript("return arguments[0].firstElementChild;", this)
    );
  };

  /**
   * Returns the last child element of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element(by.css('.items li')).lastChild();
   * targetElement..click();
   *
   * @returns {Promise<ElementFinder>}
   */
  ElementFinder.prototype.lastChild = function() {
    return browser.executeScript("return arguments[0].lastElementChild;", this);
  };

  /**
   * Returns the list of last sibling elements of a given element .Promise needs to be resolved
   *
   * @example
   * let targetElement = await element.all(by.css('.items li')).prevSibling();
   * targetElement.get(1).click();
   *
   * @returns {Promise<ElementArrayFinder>}
   */
  ElementArrayFinder.prototype.lastChild = function() {
    return this.all(
      browser.executeScript("return arguments[0].lastElementChild;", this)
    );
  };
};
