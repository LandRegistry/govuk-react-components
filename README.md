# GOV.UK React components

This repository contains govuk-frontend compatible React components. It takes a lighter touch approach than https://github.com/govuk-react/govuk-react as follows:

- These components assume that you will include the govuk-frontend styles into the page yourself. No attempt to subsume the CSS into the JS has been made
- The components in this repository are effectively just JSX ports of the Nunjucks macros and so output the identical markup structure
- The `props` for these components are a like for like match of the `params` that get passed to the govuk-frontend Nunjucks macros.

If these decisions don't sound like your cup of tea, it may be worth giving https://github.com/govuk-react/govuk-react a look as it takes the opposite stance on some of the above points.

## Versioning

This repository will be tagged with the same tag as the govuk-frontend version which it is compatible with. For example `v2.12.0`. If additional versions need to be released in order to fix bugs, the tag may be suffixed, such as `v2.12.0-1`, `v2.12.0-2`, `v2.12.0-3`

## Tests

The test suite renders the examples from the govuk-frontend repository through the Nunjucks macros as well as the JSX components and compares the output. Any differences here constitute a failure.
