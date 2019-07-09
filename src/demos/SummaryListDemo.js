import React, {useEffect} from 'react'
import SummaryList from '../components/govukComponents/SummaryList'

function SummaryListDemo() {
  useEffect(() => {
    document.title = 'Summary list demo'
  }, [])

  const demoData = {
    rows: [
      {
        key: {
          text: 'Name',
        },
        value: {
          text: 'Firstname Lastname',
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Edit',
              visuallyHiddenText: 'name',
            },
            {
              href: '#',
              text: 'Delete',
              visuallyHiddenText: 'name',
            },
          ],
        },
      },
      {
        key: {
          text: 'Date of birth',
        },
        value: {
          text: '13/08/1980',
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'date of birth',
            },
          ],
        },
      },
      {
        key: {
          text: 'Contact information',
        },
        value: {
          html: <>
            <p className="govuk-body">email@email.com</p>
            <p className="govuk-body">
              Address line 1
              <br />
              Address line 2
              <br />
              Address line 3
              <br />
              Address line 4
              <br />
              Address line 5
            </p>
          </>,
        },
        actions: {
          items: [
            {
              href: '#',
              text: 'Edit',
              visuallyHiddenText: 'contact information',
            },
            {
              href: '#',
              text: 'Change',
              visuallyHiddenText: 'contact information',
            },
          ],
        },
      },
    ],
  }

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Summary list</h1>
      <SummaryList {...demoData} />
    </main>
  )
}

export default SummaryListDemo
