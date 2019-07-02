import React, {useEffect} from 'react'
import Tabs from '../components/govukComponents/Tabs'

function TabsDemo() {
  useEffect(() => {
    document.title = 'Tabs demo'
  }, [])

  const items = [
    {
      label: 'Past day',
      id: 'past-day',
      panel: {
        text: 'test',
      },
    },
    {
      label: 'Past week',
      id: 'past-week',
      panel: {
        text: 'next test',
      },
    },
    {
      label: 'Past month',
      id: 'past-month',
      panel: {
        text: 'penultimate test',
      },
    },
    {
      label: 'Past year',
      id: 'past-year',
      panel: {
        text: 'final test',
      },
    },
  ]

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Tabs</h1>
      <Tabs items={items} />
    </main>
  )
}

export default TabsDemo
