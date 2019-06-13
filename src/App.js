import React, { Component } from 'react';
import Header from './components/govukComponents/Header';
import Footer from './components/govukComponents/Footer';
import Main from './components/Main';

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
      <Header serviceName="Application Processing" attributes={{ id: "header" }} navigation={headerNavigation} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
