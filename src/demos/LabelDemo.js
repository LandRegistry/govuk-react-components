import React, { Component } from 'react';
import Label from '../components/govukComponents/Label'

class LabelDemo extends Component {
  render() {
    return (
      <main>
        <Label text='Plain label' isPageHeading='false' />
        <Label text='Label as page header' isPageHeading={true} />
        <Label html='<p>Label for text input</p>' for='input' />
        <Label html='<span class="govuk-heading-s">Label with html set instead of text</p>' for='input' />
      </main>
    )
  }
}

export default LabelDemo