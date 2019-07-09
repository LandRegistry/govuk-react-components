import React from 'react'
import Header from './components/govukComponents/Header'
import Footer from './components/govukComponents/Footer'
import Main from './components/Main'

function App() {
  const navigationItems = [{
    text: 'External link',
    href: 'http://gov.uk',
    classes: 'custom-class',
    attributes: {
      id: 'link',
      title: 'link',
    },
  }, {
    text: 'Internal link',
    to: '/accordion',
    attributes: {
      id: 'differentlLink',
      title: 'differentLink',
    },
  }]

  return (
    <div className="app">
      <Header serviceName="Application Processing" attributes={{id: 'header'}} navigation={navigationItems} />
      <Main />
      <Footer meta={{items: navigationItems}} />
    </div>
  )
}

export default App
