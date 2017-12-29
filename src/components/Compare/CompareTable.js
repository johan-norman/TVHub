import React, { Component } from 'react'
import CenterWrapper from '../CenterWrapper'

class CompareTable extends Component {
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
      <section id="c--CompareTable-wrapper">
        <CenterWrapper>
          <p>Jämförelse tabell</p>
        </CenterWrapper>
      </section>
    )
  }
}

export default CompareTable;
