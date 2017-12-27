import React, { Component } from 'react'
import SectionNumber from '../SectionNumber.js'
import PrimaryButton from '../PrimaryButton.js'
import ArrowLink from '../ArrowLink.js'

class ImageQuality extends Component {
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
      <section id="h--ImageQuality-wrapper">
        <SectionNumber text="04" />
        <h2>Högsta bildkvalité</h2>
        <p>Tv-kanaler, playbibliotek, film och musik. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
        <PrimaryButton text="Jämför" path="/compare" />
        <ArrowLink text="Läs mer" path="/features" />
      </section>
    )
  }
}

export default ImageQuality;
