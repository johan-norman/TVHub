import React, { Component } from 'react'
import SectionNumber from '../SectionNumber.js'
import PrimaryButton from '../PrimaryButton.js'
import ArrowLink from '../ArrowLink.js'
import CenterWrapper from '../CenterWrapper'
//import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const StyledVoiceWrapper = styled.section`
  text-align: center;
`;

class VoiceControl extends Component {
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
      <StyledVoiceWrapper>
        <CenterWrapper>
          <SectionNumber text="03" />
          <h2>Com hem till någon som lyssnar</h2>
          <p>Tv-kanaler, playbibliotek, film och musik. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere quis lacus ut malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
          <PrimaryButton text="Jämför" path="/compare" />
          <ArrowLink text="Läs mer" path="/features" />
        </CenterWrapper>
      </StyledVoiceWrapper>
    )
  }
}

export default VoiceControl;
