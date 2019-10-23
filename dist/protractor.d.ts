import { Locator } from "protractor/built/locators";


declare module "protractor/built/locators" {
  export interface ProtractorBy {
    /**
     *
     * @param cssSelector
     *
     * This Locator helps to identify the grand parent element of a target element
     * @example
     * <div>
     *    <p>
     *      <a> this is a link </a>
     *    </p>
     * </div>
     *
     *  element(by.grandParnetOf('a'))  will return <div>
     */
    grandParentOf(cssSelector: string): Locator;

    /**
     *
     * @param cssSelector
     *
     * This Locator helps to identify the parent element of a target element
     * @example
     * <div>
     *    <p>
     *      <a> this is a link </a>
     *    </p>
     * </div>
     *
     *  element(by.parentOf('a'))  will return <p>
     */
    parentOf(cssSelector: string): Locator;

    /**
     *
     * @param cssSelector
     *
     * The nextSiblingOf locator returns the node immediately following the specified node, in the same tree level.
     * @example
     * <div>
     *    <p>
     *      <a id='a1'> link 1</a>
     *      <a id='a2'> link 2</a>
     *    </p>
     * </div>
     *
     *  element(by.nextSiblingOf('#a1'))  will return <a id='a2'>
     */
    nextSiblingOf(cssSelector: string): Locator;

    /**
     *
     * @param cssSelector
     *
     * The prevSiblingOf locator returns the previous element of the specified element, in the same tree level.
     * @example
     * <div>
     *    <p>
     *      <a id='a1'> link 1</a>
     *      <a id='a2'> link 2</a>
     *    </p>
     * </div>
     *
     *  element(by.prevSiblingOf('#a2'))  will return  <a id='a1'>
     */
    prevSiblingOf(cssSelector: string): Locator;

    /**
     *
     * @param cssSelector
     *
     * The firstChildOf locator returns the first child element of the specified element.
     * @example
     * <ul id="myList">
     *  <li>Coffee</li>
     *  <li>Tea</li>
     * </ul>
     *
     *  element(by.firstChildOf('#myList'))  will return  <li>Coffee</li>
     */
    firstChildOf(cssSelector: string): Locator;

    /**
     *
     * @param cssSelector
     *
     * The lastChildOf locator returns the last child element of the specified element.
     * @example
     * <ul id="myList">
     *  <li>Coffee</li>
     *  <li>Tea</li>
     * </ul>
     *
     *  element(by.lastChildOf('#myList'))  will return <li>Tea</li>
     */
    lastChildOf(cssSelector: string): Locator;

    /**
     *
     * @param cssSelector
     *
     * The followingSibling locator returns the following sibling of a given element. This should always be used with element chain as the second element finder
     * @example
     * <ul id="myInfo">
     *  <Name>Thor</Name>
     *  <Age>Million Years</Age>
     *  <Home>Asgard</Home>
     * </ul>
     *
     *  element(by.cssContainingText('Name','Thor')).element(by.followingSibling('Age'))  will return <Age>Million Years</Age>
     *
     *  element(by.cssContainingText('Name','Thor')).element(by.followingSibling('Home'))  will return <Home>Asgard</Home>
     */
    followingSibling(cssSelector: string): Locator;
  }
}

export * from "protractor";