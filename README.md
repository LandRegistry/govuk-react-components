# GOV.UK React components

This repository contains govuk-frontend compatible React components. It takes a lighter touch approach than https://github.com/govuk-react/govuk-react as follows:

- These components assume that you will include the govuk-frontend styles into the page yourself. No attempt to subsume the CSS into the JS has been made
- The components in this repository are effectively just JSX ports of the Nunjucks macros and so output the identical markup structure
- The `props` for these components are a like for like match of the `params` that get passed to the govuk-frontend Nunjucks macros.

If these decisions don't sound like your cup of tea, it may be worth giving https://github.com/govuk-react/govuk-react a look as it takes the opposite stance on some of the above points.

**NOTE: DOESN'T CURRENTLY WORK WITH CREATE-REACT-APP**

## Assumptions

These components assume you:

- Have compiled the govuk-frontend scss and have included it in your page
- Are using react-router
- **Have read the exceptions below**

## Exceptions

Exceptions to the above conformance are:

- Links - Anywhere that accepts an `href` / `text` combo of params to create a hyperlink, will also accept a `to` prop instead of `href`, which will be used in a react-router `<Link>` element.
- Anywhere that accepts an `html` param in Nunjucks will expect the equivalent prop in React to be a piece of JSX - _not_ a string of html, because we want to avoid dangerouslySetInnerHtml if at all possible. If you absolutely have to deal with strings of html it is up to you to convert them safely to JSX using something like a combination of https://github.com/cure53/DOMPurify and https://github.com/remarkablemark/html-react-parser  
  Text is treated in exactly the same way - it essentially is JSX.
- List keys - Anywhere that you specify an array of items such as a list of links, you may optionally specify a `reactListKey` for each item. This will be used instead of the index when doing `.map` over the items. React uses these keys internally to work out whether to re-render items. This is crucial for dynamic components where you might re-sort the list items for example. For static data it is less important and the key can be omitted. (See https://reactjs.org/docs/lists-and-keys.html#keys for more)  
  (_The only exception to this rule is the tab component, where the tabs are already sufficiently keyed by id_)
  

## Versioning

This repository will be tagged with the same tag as the govuk-frontend version which it is compatible with. For example `v2.12.0`. If additional versions need to be released in order to fix bugs, the tag may be suffixed, such as `v2.12.0-1`, `v2.12.0-2`, `v2.12.0-3`

## Tests

The test suite renders the examples from the govuk-frontend repository through the Nunjucks macros as well as the JSX components and compares the output. Any differences here constitute a failure.
