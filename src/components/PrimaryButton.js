import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

class PrimaryButton extends Component {
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
      <a href={this.props.path} className="PrimaryButton">
        {this.props.text}
      </a>
    )
  }
}

export default PrimaryButton;
