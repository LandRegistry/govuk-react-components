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

## Release process

Releases are pushed to internally hosted versions of PyPi and npm on the Nexus repository manager. The process is as follows:

- Merge changes into `master` to get to the code in that branch to the desired state to release
- Figure out the new version number the release will have (3.1.2 in this example)
- Ensure `package.json` and `package-lock.json` are updated the version number for the release e.g.
```
{
  "name": "govuk-react-components",
  "version": "3.1.2",
  ...
```

- Set up an additional upstream remote to GitLab `GOV.UK React Components` in the `Common` group. For example using  `gitlab-govuk-react-components` as your reference to that remote repository
```
$ git remote add gitlab-govuk-react-components <ssh url for GOV.UK React Components in gitlab>
```  

- By using `git remote` you should see two remotes available now
```
$ git remote
origin
gitlab-govuk-react-components
```
- Push the code to gitlab remote repository using the reference `gitlab-govuk-react-components` 
```
    $ git push gitlab-govuk-react-components
``` 
- Go to the GitLab repo (`GOV.UK React Components` in the `Common` group). 
  - You should see the last commit from `GitHub` has now been pushed to the `GitLab` repo on the `master` branch
  - Tag the `master` branch you just pushed to:
    - n.b. you may need to be a developer or maintainer in the project to create a new tag
    - Go to `Repository`->`Tags`->`New tag` 
      - Set the `Tag name` to the version number of gov uk react components, (i.e. the version number you set in package.json)
      - Set `Create from` to `master`
    - This will cause the pipeline to run and push the npm and PyPi packages to Nexus
  - These can then be used in your applications as normal, assuming you have pointed npm and PyPi at Nexus (See `pip.conf` and `.npmrc` files in flask-skeleton-ui for examples of how to do this)
