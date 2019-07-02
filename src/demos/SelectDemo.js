import React, {useEffect} from 'react'
import Select from '../components/govukComponents/Select'

function SelectDemo() {
  useEffect(() => {
    document.title = 'Select demo'
  }, [])

  const items = [
    {
      value: 'published',
      text: 'Recently published',

    },
    {
      value: 'updated',
      text: 'Recently updated',
      disabled: true,
    },
    {
      value: 'views',
      text: 'Most views',
    },
    {
      value: 'comments',
      text: 'Most comments',
      selected: true,
    },
  ]

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">Select</h1>
      <Select
        id="sort"
        name="sort"
        label={
          {text: 'Sort by'}
        }
        items={items}
      />
    </main>
  )
}

export default SelectDemo
