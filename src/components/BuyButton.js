import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class BuyButton extends Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc
  }
  render() {
    return (
      <a href={this.props.path} className="BuyButton" target="_blank">
        {this.props.text}
      </a>
    )
  }
}

export default BuyButton;
