import React, {useEffect} from 'react'
import Tag from '../components/govukComponents/Tag'

function TagDemo() {
  useEffect(() => {
    document.title = 'Tag demo'
  }, [])

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Tag</h1>
      <Tag text="Completed" />
    </main>
  )
}

export default TagDemo
