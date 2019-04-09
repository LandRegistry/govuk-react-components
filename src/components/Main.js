import React, { Component } from 'react';
import Nav from './Nav';
import BackLink from '../demos/BackLink';
import HintDemo from '../demos/HintDemo';
import LabelDemo from '../demos/LabelDemo';
import InputDemo from '../demos/InputDemo';

import { Route, Switch } from "react-router-dom";

class Main extends Component {

  render() {

    const navigation = [
      {
        text: "Back link",
        href: "/back-link"
      }, {
        text: "Hint",
        href: "/hint"
      }, {
        text: "Label",
        href: "/label"
      }, {
        text: "Input",
        href: "/input"
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
              <Route exact path="/hint" component={HintDemo} />
              <Route exact path="/label" component={LabelDemo} />
              <Route exact path="/input" component={InputDemo} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;