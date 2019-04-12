import React from 'react';
import Nav from './Nav';
import BackLink from '../demos/BackLink';
import ButtonDemo from '../demos/ButtonDemo';
import CheckboxesDemo from '../demos/CheckboxesDemo';
import HintDemo from '../demos/HintDemo';
import LabelDemo from '../demos/LabelDemo';
import InputDemo from '../demos/InputDemo';
import SkipLinkDemo from '../demos/SkipLinkDemo';

import { Route, Switch } from "react-router-dom";

function Main() {

  const navigation = [
    {
      text: "Back link",
      href: "/back-link"
    }, {
      text: "Button",
      href: "/button"
    }, {
      text: "Checkboxes",
      href: "/checkboxes"
    }, {
      text: "Hint",
      href: "/hint"
    }, {
      text: "Label",
      href: "/label"
    }, {
      text: "Input",
      href: "/input"
    }, {
      text: "Skip link",
      href: "/skip-link"
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
            <Route exact path="/button" component={ButtonDemo} />
            <Route exact path="/checkboxes" component={CheckboxesDemo} />
            <Route exact path="/hint" component={HintDemo} />
            <Route exact path="/label" component={LabelDemo} />
            <Route exact path="/input" component={InputDemo} />
            <Route exact path="/skip-link" component={SkipLinkDemo} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Main;