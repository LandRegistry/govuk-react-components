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


const govukFrontendPath = path.dirname(require.resolve('govuk-frontend/README.md'))
const govukPackage = require(path.join(govukFrontendPath, 'package.json'))


components.forEach(component => {
  const response = request('GET', `https://raw.githubusercontent.com/alphagov/govuk-frontend/v${govukPackage.version}/src/components/${component.name}/${component.name}.yaml`)
  const data = yaml.safeLoad(response.getBody('utf8'))

  describe(component.name, () => {
    data.examples.forEach(example => {
      describe(`${example.name}`, () => {
        it('React output matches Nunjucks output', () => {
          const expected = nunjucks.render(path.join(govukFrontendPath, 'components', component.name ,'template.njk'), {
            params: example.data
          }).trim()
          const actual = ReactDOM.renderToStaticMarkup(React.createElement(component.reactComponent, example.data))
          expect(actual).toBe(expected)
        })
      })
    })
  })
})
