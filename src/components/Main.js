import React, { Component } from 'react';
import Nav from './Nav';
import BackLink from './govukComponents/BackLink';
import TextInput from './govukComponents/TextInput';

import { Route, Switch } from "react-router-dom";

class Main extends Component {

  render() {

    const navigation = [
      {
        text: "Back link",
        href: "/back-link"
      }, {
        text: "Text input",
        href: "/text-input"
      }]

    return (
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-quarter">
            <Nav navigation={navigation} />
          </div>
          <div className="govuk-grid-column-three-quarters">
            <Switch>
              <Route exact path="/back-link" component={BackLink} />
              <Route exact path="/text-input" component={TextInput} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;