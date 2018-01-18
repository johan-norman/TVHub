import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ArrowLink extends Component {
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
      <Link to={this.props.path}>{this.props.text}</Link>
    )
  }
}

export default ArrowLink;
