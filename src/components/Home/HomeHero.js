import React, { Component } from 'react'

class HomeHero extends Component {
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
      <section id="h--hero-wrapper">
        <div className="h--hero-text">
          <h2>Com Hem TV Hub</h2>
          <h1>En världsnyhet inom hemmaunderhållning</h1>
        </div>
      </section>
    )
  }
}

export default HomeHero;
