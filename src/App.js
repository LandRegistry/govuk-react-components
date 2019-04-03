import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import 'govuk-frontend/all.js';

class App extends Component {

  render() {

    const headerAttributes = {
      id: "Header"
    }
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

    const navigation = [{
      text: "Styles",
      href: "/styles"
    }, {
      text: "Components",
      href: "/components"
    }]

    return (
      <div className="app">
        <Header serviceName="Civil Service Learning" attributes={headerAttributes} navigation={headerNavigation} />
        <Main />
      </div>

    );
  }
}

export default App;
