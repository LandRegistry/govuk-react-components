import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {

  render() {

    const headerAttributes = {
      id: "Header"
    }
    const navigation = [{
      text: "example link 1",
      href: "/",
      classes: "custom-class",
      attributes: {
        id: "link",
        title: "link"
      }
    },
    {
      text: "example link 1",
      href: "/",
      attributes: {
        id: "differentlLink",
        title: "differentLink"
      }
    }]

    return (
      <div className="app">
        <Header serviceName="Civil Service Learning" attributes={headerAttributes} navigation={navigation} />
        <div className="wrapper">
        </div>
      </div>

    );
  }
}

export default App;
