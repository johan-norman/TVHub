import React, { Component } from 'react'
import SectionNumber from '../SectionNumber.js'
import PrimaryButton from '../PrimaryButton.js'
import ArrowLink from '../ArrowLink.js'
import CenterWrapper from '../CenterWrapper'
import { Flex, Box } from 'grid-styled'

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
      <section id="h--entertainment-wrapper">
        <CenterWrapper>
          <Flex>
            <Box width={1/2} px={2} pt="80px" pb="80px">
              <SectionNumber text="01" />
              <h2>All underhållning på en plats</h2>
              <p>Tv-kanaler, playbibliotek, film och musik. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
              <PrimaryButton text="Jämför" path="/compare" />
              <ArrowLink text="Läs mer" path="/features" />
            </Box>
            <Box width={1/2} px={2}>

            </Box>
          </Flex>
        </CenterWrapper>
      </section>
    )
  }
}

export default Entertainment;
