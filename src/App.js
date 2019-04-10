import React, { Component } from 'react';
import Header from './components/govukComponents/Header';
import Main from './components/Main';
import 'govuk-frontend/all.js';

function App() {

  const headerNavigation = [{
    text: "example link 1",
    href: "/",
    classes: "custom-class",
    attributes: {
      id: "link",
      title: "link"
    }
  }, {
    text: "example link 2",
    to: "/",
    attributes: {
      id: "differentlLink",
      title: "differentLink"
    }
  }]

  return (
    <div className="app">
      <Header serviceName="Civil Service Learning" attributes={{ id: "header" }} navigation={headerNavigation} />
      <Main />
    </div>
  );
}

export default App;
