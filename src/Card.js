import React, {Component} from 'react';
import { render } from "@testing-library/react";

export default class Card extends Component {

  render() {
    return (
      <div class="weatherCard">
        <p>Hi! I'm a card.</p>
      </div>
    )
  }
}