## What can it do?

_protractor-css-booster_ is lightweight plugin to help you to find out web elements by using special selectors using CSS.

Now, you can find web elements such as:

1. Finding Grand Parent Element
2. Finding Parent Element
3. Finding Next Sibling
4. Finding Previous Sibling
5. Finding any Following Sibling
6. Finding First Child Element
7. Finding Last Child Element

And, guess what, everything you can find using :collision: **CSS Selectors** :collision:

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
            <Name>Thor</Name>
            <Age>Million Years</Age>
            <Home>Asgard</Home>
        </ul>
      </div>

    </div>
```

#### find GrandParent:

This Locator helps to identify the grand parent element of a target element

You can find the grand parent by:

```ts
const gp = element(by.grandParnetOf("a")); // retuns <div id='borr'> <p id="odin"> <a id="thor"> baby thor </a></p></div>
```

#### find Parent:

This Locator helps to identify the parent element of a target element

You can find the parent by:

```ts
const gp = element(by.parnetOf("#thor")); // retuns  <p id="odin"><a id="thor"> baby thor </a> </p>
```

#### find Next Sibling:

The nextSiblingOf locator returns the node immediately following the specified node, in the same tree level.

You can find the next sibling by:

```ts
const gp = element(by.nextSiblingOf("Name")); // retuns <Age>Million Years</Age>
```

#### find Previous Sibling:

The prevSiblingOf locator returns the previous element of the specified element, in the same tree level.

You can find the previous sibling by:

```ts
const gp = element(by.prevSiblingOf("Age")); // retuns <Name>Thor</Name>
```

#### find Following Sibling:

The followingSibling locator returns the following sibling of a given element. This should always be used with element chain as the second element finder.

It will help you to omit the xpath's //following-sibling:: dependency

You can find the following sibling by:

```ts
const gp = element(by.cssContainingText("Name", "Thor")).element(
  by.followingSibling("Age")
); // retuns <Age>Million Years</Age>
```

#### find First Child:

The firstChildOf locator returns the first child element of the specified element.

You can find the first child by:

```ts
const gp = element(by.firstChildOf("#schoolBook")); // retuns <Name>Thor</Name>
```

#### find Last Child:

The lastChildOf locator returns the last child element of the specified element.

You can find the last child by:

```ts
const gp = element(by.lastChildOf("#schoolBook")); // <Home>Asgard</Home>
```

## Tell me your issues

you can raise any issue [here](https://github.com/abhinaba1080/protractor-css-booster/issues)

## Contribution

Any pull request is welcome keeping proper code structure.

If works for you, dont forget to give a star.

_- Copyright &copy; 2019- [Abhinaba Ghosh](https://www.linkedin.com/in/abhinaba-ghosh-9a2ab8a0/)_
