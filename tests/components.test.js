import React from 'react';
import ReactDOM from 'react-dom/server';
import Button from '../src/components/govukComponents/Button.js';
import Hint from '../src/components/govukComponents/Hint.js';
import Tag from '../src/components/govukComponents/Tag.js';
import nunjucks from 'nunjucks';
import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';
import request from 'sync-request';
import {HtmlDiffer} from 'html-differ';
import ReactHtmlParser from 'react-html-parser';

const components = [
  {
    name: 'button',
    reactComponent: Button
  },
  {
    name: 'hint',
    reactComponent: Hint
  },
  {
    name: 'tag',
    reactComponent: Tag
  }
]

const htmlDiffer = new HtmlDiffer({
  ignoreAttributes: [
    'disabled'  // Because React sets disabled as an empty attribute but the nunjucks does not
  ]
});

const govukFrontendPath = path.dirname(require.resolve('govuk-frontend/README.md'))
const govukPackage = require(path.join(govukFrontendPath, 'package.json'))


components.forEach(component => {
  const response = request('GET', `https://raw.githubusercontent.com/alphagov/govuk-frontend/v${govukPackage.version}/src/components/${component.name}/${component.name}.yaml`)
  const data = yaml.safeLoad(response.getBody('utf8'))

  describe(component.name, () => {
    data.examples.forEach(example => {
      // Process the data for handing to React so that the html params get passed as JSX
      const reactData = Object.assign({}, example.data)
      if (reactData.html) {
        reactData.html = ReactHtmlParser(reactData.html)
      }

      describe(`${example.name}`, () => {
        it('React output matches Nunjucks output', () => {
          const expected = nunjucks.render(path.join(govukFrontendPath, 'components', component.name ,'template.njk'), {
            params: example.data
          })

          const actual = ReactDOM.renderToStaticMarkup(React.createElement(component.reactComponent, reactData))

          const comparison = htmlDiffer.isEqual(actual, expected)

          // If the comparison is false, then compare the strings so that the person can eyeball the diff
          if (!comparison) {
            expect(actual).toBe(expected)
          }

          expect(comparison).toBe(true)
        })
      })
    })
  })
})
