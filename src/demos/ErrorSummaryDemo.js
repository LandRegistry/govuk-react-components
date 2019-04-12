import React, { useEffect } from 'react'
import ErrorSummary from '../components/govukComponents/ErrorSummary'

function ErrorSummaryDemo() {

  useEffect(() => {
    document.title = 'Error summary demo'
  })

  var errorList = [
    {
      text: "The date your passport was issued must be in the past",
      href: "#passport-issued-error"
    },
    {
      text: "Enter a postcode, like AA1 1AA",
      href: "#postcode-error"
    }
  ]

  return (

    <main id="content">
      <h1 className="govuk-heading-l">Button</h1>
      <ErrorSummary
        titleText="There is a problem"
        errorList={errorList}
      />
    </main>
  )
}

export default ErrorSummaryDemo