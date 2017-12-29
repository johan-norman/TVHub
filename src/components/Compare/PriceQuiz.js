import React, { Component } from 'react'
import CenterWrapper from '../CenterWrapper'

class PriceQuiz extends Component {
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
      <section id="c--PriceQuiz-wrapper">
        <CenterWrapper>
          <h2>Kan jag få tv hub?</h2>
          <p>Lorem ipsum dolor sit amet..</p>
        </CenterWrapper>
      </section>
    )
  }
}

export default PriceQuiz;
