import React, {useEffect} from 'react'
import Radios from '../components/govukComponents/Radios'
import Input from '../components/govukComponents/Input'


function RadiosDemo() {
  useEffect(() => {
    document.title = 'Radios demo'
  })

  const items = [{
    value: 'England',
    text: 'England',
  },
  {
    value: 'Scotland',
    text: 'Scotland',
  },
  {
    value: 'Wales',
    text: 'Wales',
  },
  {
    divider: 'or',
  },
  {
    value: 'Northern Ireland',
    text: 'Northern Ireland',
  }]

  const items2 = [
    {
      value: 'Yes',
      text: 'Yes',
    },
    {
      value: 'No',
      text: 'No',
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

  const items3 = [{
    text: 'Sign in with Government Gateway',
    value: 'Gateway',
    hint: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before.",
  }, {
    text: 'Sign in with GOV.UK Verify',
    value: 'Verify',
    hint: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",
  }]

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Radios</h1>
      <Radios
        hint={{
          text: 'Select all that apply.',
        }}
        items={items}
        name="waste"
      />
      <Radios
        classes="govuk-radios--inline"
        hint={{
          text: 'Select all that apply.',
        }}
        items={items2}
        fieldset={{
          legend: {
            isPageHeading: true,
            text: 'What is your nationality',
            classes: 'govuk-fieldset__legend--l',
          },
        }}
        name="name"
      />
      <Radios
        hint={{
          text: "You'll need an account to prove your identity and complete your Self Assessment.",
        }}
        items={items3}
        fieldset={{
          legend: {
            isPageHeading: true,
            text: 'How do you want to sign in?',
            classes: 'govuk-fieldset__legend--l',
          },
        }}
        name="name"
      />
      <Radios
        hint={{
          text: 'Select all options that are relevant to you.',
        }}
        items={itemsConditional}
        fieldset={{
          legend: {
            isPageHeading: true,
            text: 'How would you like to be contacted?',
            classes: 'govuk-fieldset__legend--l',
          },
        }}
        name="method"
      />
      <Radios
        classes="govuk-radios--inline"
        hint={{
          text: 'This includes changing your last name or spelling your name differently.',
        }}
        items={items2}
        errorMessage={{
          text: 'Select yes if you have changed your name',
        }}
        name="nationality"
        fieldset={{
          legend: {
            isPageHeading: true,
            text: 'Have you changed your name?',
            classes: 'govuk-fieldset__legend--l',
          },
        }}
      />
    </main>
  )
}

export default RadiosDemo
