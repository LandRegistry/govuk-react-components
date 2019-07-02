import React, {useEffect} from 'react'
import Accordion from '../components/govukComponents/Accordion'

function AccordionDemo() {
  useEffect(() => {
    document.title = 'Accordion demo'
  }, [])

  const items = [{
    heading: {
      text: 'Understanding agile project management',
    },
    content: {
      html: <>
        <a href="/" className="govuk-link">Agile and government services: an introduction</a>
        <br />
        <a href="/" className="govuk-link">Agile methods: an introduction</a>
        <br />
        <a href="/" className="govuk-link">Core principles of agile</a>
      </>,
    },
    summary: {
      text: 'Introductions, methods, core features.',
    },
  }, {
    heading: {
      text: 'Working with agile methods',
    },
    content: {
      html: <>
        <a href="/" className="govuk-link">Creating an agile working environment</a>
        <br />
        <a href="/" className="govuk-link">Agile tools and techniques</a>
        <br />
        <a href="/" className="govuk-link">Set up a team wall</a>
        <br />
        <a href="/" className="govuk-link">Writing user stories</a>
        <br />
        <a href="/" className="govuk-link">Planning in agile</a>
        <br />
        <a href="/" className="govuk-link">Deciding on priorities</a>
        <br />
        <a href="/" className="govuk-link">Developing a roadmap</a>
        <br />
      </>,
    },
    summary: {
      text: 'Worksapces, tools and techniques, user stories, planning',
    },
  }]

  const items2 = [{
    heading: {
      text: 'Writing well for the web',
    },
    content: {
      html: <a className="govuk-link" href="/">This is the content for Writing well for the web.</a>,
    },
  },
  {
    heading: {
      text: 'sample',
    },
    content: {
      text: 'Plain text content',
    },
  }]

  return (
    <main id="#content">
      <h1 className="govuk-heading-l">Accordion</h1>
      <h2 className="govuk-heading-m">With summary</h2>
      <Accordion id="accordion-demo" items={items} headingLevel="2" />
      <h2 className="govuk-heading-m">Without summary</h2>
      <Accordion id="accordion-demo" items={items2} headingLevel="3" />
    </main>
  )
}

export default AccordionDemo
