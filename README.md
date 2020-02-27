## What can it do?

Finding an web element using XPATH is not a right choice to make as it slows down the element finding mechanism. But, due to the lack of CSS support for multiple use cases, still XPATH use to gather some space in your testing world.

Worry not! Here comes Protractor-CSS-Booster! :hatching_chick:

_protractor-css-booster_ is lightweight plugin to help you to find out web elements by using special custom selectors. All the custom locator uses CSS selector as an input to accomplish the task for you.

Now, you can find web elements such as:

1. Finding Grand Parent Element
2. Finding Parent Element
3. Finding Next Sibling
4. Finding Previous Sibling
5. Finding any Following Sibling
6. Finding First Child Element
7. Finding Last Child Element

And, guess what, everything you can find using :collision: **CSS Selectors** :collision:

**_IE Support added from version 1.0.9_**

## Installation

Install this module locally with the following command to be used as a (dev-)dependency:

```shell
npm install --save protractor-css-booster
npm install --save-dev protractor-css-booster
```

## Usage

> _protractor-css-booster_ supports NodeJS 8 or higher

### Configuration

_protractor-css-booster_ can be used as a plugin in your protractor configuration file with the following code:

```typescript
exports.config = {
  // ... the rest of your config
  plugins: [
    {
      // The module name
      package: "protractor-css-booster"
    }
  ]
};
```

### Using CSS Booster

**_You can now have the flexibility to use protractor-css-booster in two ways -_**
**_1. using css selector_**
**_2. using prototype function (in this case you need to use await / resolve promise by "then")_**
**_Refer below examples_**

Suppose your HTML

```HTML
  <div>
      <h2>Thor's Biodata</h2>
      <div id='borr'>
         <p id="odin">
           <a id="thor"> baby thor </a>
         </p>
      </div>
      <div>
        <ul id="schoolBook">
            <li id="name">Thor</li>
            <li id="age">Million Years</li>
            <li id="home">Asgard</li>
        </ul>
      </div>

    </div>
```

#### find GrandParent:

This Locator helps to identify the grand parent element of a target element

You can find the grand parent by:

```ts
const target = await element(by.css("#schoolBook")).grandParent(); // returns <div id='borr'> <p id="odin"> <a id="thor"> baby thor </a></p></div>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.grandParentOf("#schoolBook")); // returns <div id='borr'> <p id="odin"> <a id="thor"> baby thor </a></p></div>
```

#### find Parent:

This Locator helps to identify the parent element of a target element

You can find the parent by:

```ts
const target = await element(by.css("#thor")).parent(); // returns <p id="odin"><a id="thor"> baby thor </a> </p>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.parentOf("#thor")); // returns  <p id="odin"><a id="thor"> baby thor </a> </p>
target.click(); //proceed with your desired operation
```

#### find Next Sibling:

The nextSiblingOf locator returns the node immediately following the specified node, in the same tree level.

You can find the next sibling by:

```ts
const target = await element(by.css("#name")).nextSibling(); // returns <li id="age">Million Years</li>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.nextSiblingOf("#name")); //  returns <li id="age">Million Years</li>
target.click(); //proceed with your desired operation
```

#### find Previous Sibling:

The prevSiblingOf locator returns the previous element of the specified element, in the same tree level.

You can find the previous sibling by:

```ts
const target = await element(by.css("#age")).prevSibling(); // returns <li id="name">Thor</li>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.prevSiblingOf("#age")); // returns <li id="name">Thor</li>
target.click(); //proceed with your desired operation
```

#### find Following Sibling:

The followingSibling locator returns the following sibling of a given element. This should always be used with element chain as the second element finder.

It will help you to omit the xpath's //following-sibling:: dependency

You can find the following sibling by:

```ts
const target = await element(by.css("#name")).nextSibling(); // returns <li id="age">Million Years</li>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.cssContainingText("#name", "Thor")).element(
  by.followingSibling("#age")
); // returns <li id="age">Million Years</li>
```

#### find First Child:

The firstChildOf locator returns the first child element of the specified element.

You can find the first child by:

```ts
const target = await element(by.css("#schoolBook")).firstChild(); // returns <li id="name">Thor</li>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.firstChildOf("#schoolBook")); // returns <li id="name">Thor</li>
target.click(); //proceed with your desired operation
```

#### find Last Child:

The lastChildOf locator returns the last child element of the specified element.

You can find the last child by:

```ts
const target = await element(by.css("#schoolBook")).lastChild(); // returns <li id="home">Asgard</li>
target.click(); //proceed with your desired operation
```

Or you can use as by-locator style,

```ts
const target = element(by.lastChildOf("#schoolBook")); // returns <li id="home">Asgard</li>
target.click(); //proceed with your desired operation
```

## Sample Test Files:

> Using prototype function sample test cases can be found [here](./test/prototype-function.spec.js)

> using as "by-locator" sample test cases can be found [here](./test/by-locator.spec.js)

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba1080/protractor-css-booster/issues)

## Contribution

Any pull request is welcome keeping proper code structure.

If works for you, kindly give a star. :star2:

_- Copyright &copy; 2019- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
