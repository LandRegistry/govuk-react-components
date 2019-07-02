import React, {useEffect} from 'react'
import Checkboxes from '../components/govukComponents/Checkboxes'
import Input from '../components/govukComponents/Input'

function CheckboxesDemo() {
  useEffect(() => {
    document.title = 'Checkboxes demo'
  }, [])

  const items = [{
    value: 'carcasses',
    text: 'Waste from animal carcasses',
  },
  {
    value: 'mines',
    text: 'Waste from mines or quarries',
  },
  {
    value: 'farm',
    text: 'Farm or agricultural waste',
  }]

  const items2 = [
    {
      id: 'british',
      value: 'british',
      text: 'British',
      hint: {
        text: 'including English, Scottish, Welsh and Northern Irish',
      },
    },
    {
      id: 'irish',
      value: 'irish',
      text: 'Irish',
    },
    {
      value: 'other',
      text: 'Citizen of another country',
    },
  ]

  const emailHtml = <Input id="contact-by-email" name="contact-by-email" type="email" classes="govuk-!-width-one-third" label={{text: 'Email address'}} attributes={{spellCheck: 'false'}} />
  const phoneHtml = <Input id="contact-by-phone" name="contact-by-phone" type="telephone" classes="govuk-!-width-one-third" label={{text: 'Phone number'}} attributes={{spellCheck: 'false'}} />
  const textHtml = <Input id="contacty-by-text" name="contact-by-text" type="telephone" classes="govuk-!-width-one-third" label={{text: 'Mobile phone number'}} attributes={{spellCheck: 'false'}} />

  const itemsConditional = [
    {
      value: 'email',
      text: 'Email',
      conditional: {
        html: emailHtml,
      },
    },
    {
      value: 'phone',
      text: 'Phone',
      conditional: {
        html: phoneHtml,
      },
    },
    {
      value: 'text message',
      text: 'Text message',
      conditional: {
        html: textHtml,
      },
    },
  ]

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Checkboxes</h1>
      <Checkboxes hint={{text: 'Select all that apply.'}} items={items} name="waste" />
      <Checkboxes hint={{text: 'Select all that apply.'}} items={items} fieldset={{legend: {isPageHeading: true, text: 'Which types of waste do you transport?', classes: 'govuk-fieldset__legend--l'}}} name="waste2" />
      <Checkboxes hint={{text: 'Select all options that are relevant to you.'}} items={itemsConditional} fieldset={{legend: {isPageHeading: true, text: 'How would you like to be contacted?', classes: 'govuk-fieldset__legend--l'}}} name="waste2" />
      <Checkboxes hint={{text: 'If you have dual nationality, select all options that are relevant to you.'}} items={items2} errorMessage={{text: 'Select at least one of the options below'}} name="nationality" fieldset={{legend: {isPageHeading: true, text: 'What is your nationality?', classes: 'govuk-fieldset__legend--l'}}} />
    </main>
  )
}

export default CheckboxesDemo
