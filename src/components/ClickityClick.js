// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasbeenClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      hasbeenClicked: true
    }, () => console.log(this.state.hasbeenClicked))
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasbeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }

}
