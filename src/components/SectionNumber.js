import React, { Component } from 'react'

class Entertainment extends Component {
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
      <div className="section-number">
        {this.props.text}
      </div>
    )
  }
}

export default Entertainment;
