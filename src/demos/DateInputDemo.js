import React, {useEffect} from 'react'
import DateInput from '../components/govukComponents/DateInput'

function DateInputDemo() {
  useEffect(() => {
    document.title = 'Date input demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Date input</h1>
      <DateInput
        id="passport-issued"
        namePrefix="passport-issued"
        fieldset={{
          legend: {
            text: 'When was your passport issued?',
            isPageHeading: true,
            classes: 'govuk-fieldset__legend--xl',
          },
        }}
        hint={{
          text: 'For example, 12 11 2007',
        }}
      />
    </main>
  )
}

export default DateInputDemo
