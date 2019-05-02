import React from 'react';
import ReactDOM from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import nunjucks from 'nunjucks';
import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';
import request from 'sync-request';
import glob from 'glob';
import ent from 'ent';
import prettyhtml from '@starptech/prettyhtml';
import {HtmlDiffer} from '@markedjs/html-differ';
import ReactHtmlParser from 'react-html-parser';
import Accordion from '../src/components/govukComponents/Accordion.js';
import BackLink from '../src/components/govukComponents/BackLink.js';
import Button from '../src/components/govukComponents/Button.js';
import Checkboxes from '../src/components/govukComponents/Checkboxes.js';
import Details from '../src/components/govukComponents/Details.js';
import ErrorMessage from '../src/components/govukComponents/ErrorMessage';
import ErrorSummary from '../src/components/govukComponents/ErrorSummary.js';
import Fieldset from '../src/components/govukComponents/Fieldset.js';
import FileUpload from '../src/components/govukComponents/FileUpload.js';
import Header from '../src/components/govukComponents/Header.js';
import Hint from '../src/components/govukComponents/Hint.js';
import Input from '../src/components/govukComponents/Input.js';
import Label from '../src/components/govukComponents/Label.js';
import Panel from '../src/components/govukComponents/Panel.js';
import Radios from '../src/components/govukComponents/Radios.js';
import SkipLink from '../src/components/govukComponents/SkipLink.js';
import Tag from '../src/components/govukComponents/Tag.js';
import Textarea from '../src/components/govukComponents/Textarea.js';
import WarningText from '../src/components/govukComponents/WarningText.js';

const components = [
  {
    name: 'accordion',
    reactComponent: Accordion
  },
  {
    name: 'back-link',
    reactComponent: BackLink
  },
  {
    name: 'button',
    reactComponent: Button
  },
  {
    name: 'checkboxes',
    reactComponent: Checkboxes
  },
  {
    name: 'details',
    reactComponent: Details
  },
  {
    name: 'error-message',
    reactComponent: ErrorMessage
  },
  {
    name: 'error-summary',
    reactComponent: ErrorSummary
  },
  {
    name: 'fieldset',
    reactComponent: Fieldset
  },
  {
    name: 'file-upload',
    reactComponent: FileUpload
  },
  {
    name: 'header',
    reactComponent: Header
  },
  {
    name: 'hint',
    reactComponent: Hint
  },
  {
    name: 'input',
    reactComponent: Input
  },
  {
    name: 'label',
    reactComponent: Label
  },
  {
    name: 'panel',
    reactComponent: Panel
  },
  {
    name: 'radios',
    reactComponent: Radios
  },
  {
    name: 'skip-link',
    reactComponent: SkipLink
  },
  {
    name: 'tag',
    reactComponent: Tag
  },
  {
    name: 'textarea',
    reactComponent: Textarea
  },
  {
    name: 'warning-text',
    reactComponent: WarningText
  }
]

const withRouter = function(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <BrowserRouter>
        <WrappedComponent {...this.props} />
      </BrowserRouter>
    }
  }
}

const htmlDiffer = new HtmlDiffer({
  ignoreAttributes: [
    'disabled'  // Because React sets disabled as an empty attribute but the nunjucks does not
  ],
  ignoreSelfClosingSlash: true
});

const govukFrontendPath = path.dirname(require.resolve('govuk-frontend/README.md'))
const govukPackage = require(path.join(govukFrontendPath, 'package.json'))


components.forEach(component => {

  const data = getExamples(govukPackage.version, component.name)

  describe(component.name, () => {
    data.examples.forEach(example => {
      // Process the data for handing to React so that the html params get passed as JSX
      const reactData = Object.assign({}, example.data)
      if (reactData.html) {
        reactData.html = ReactHtmlParser(reactData.html)
      }

      describe(`${example.name}`, () => {
        it('React output matches Nunjucks output', () => {
          const expected = cleanHtml(nunjucks.render(path.join(govukFrontendPath, 'components', component.name ,'template.njk'), {
            params: example.data
          }))

          var actual = cleanHtml(ReactDOM.renderToStaticMarkup(React.createElement(withRouter(component.reactComponent), reactData)))

          // Make the actual comparison
          const comparison = htmlDiffer.isEqual(actual, expected)

          // If the comparison is false, then compare the strings so
          // that the person can eyeball the diff
          if (!comparison) {
            // console.log('------------------------------------------')
            // console.log(htmlDiffer.diffHtml(expected, actual))
            expect(actual).toBe(expected)
          }

          expect(comparison).toBe(true)
        })
      })
    })
  })
})


function cleanHtml(dirtyHtml) {
  return prettyhtml(ent.decode(dirtyHtml), {
    sortAttributes: true
  }).contents;
}

function getExamples(version, name) {
  // Switch these lines over once this:
  // https://github.com/alphagov/govuk-frontend/pull/1313
  // has been released. Currently pointing at master but really needs to point
  // at specific version
  // const response = request('GET', `https://raw.githubusercontent.com/alphagov/govuk-frontend/v${version}/src/components/${name}/${name}.yaml`)
  const response = request('GET', `https://raw.githubusercontent.com/alphagov/govuk-frontend/master/src/components/${name}/${name}.yaml`)
  return yaml.safeLoad(response.getBody('utf8'))
}
