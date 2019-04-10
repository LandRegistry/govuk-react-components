import React, { Component } from 'react';
import Label from '../components/govukComponents/Label'

function LabelDemo() {
  return (
    <main>
      <Label text='Plain label' isPageHeading='false' />
      <Label text='Label as page header' isPageHeading={true} />
      <Label html='Label for text input' for='input' attributes={{ id: 'melon', title: 'label' }} />
      <Label html={<span class="govuk-heading-s">Label with html set instead of text</span>} for='input' />
    </main>
  )
}

export default LabelDemo