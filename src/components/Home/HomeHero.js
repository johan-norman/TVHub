import React, { Component } from 'react'
import styled from 'styled-components'
import CenterWrapper from '../CenterWrapper'

const StyledHero = styled.section`
  height: 40vh;
  //background: pink;
  padding: 100px 0px;
  h2 {
    margin: 0px;
    font-weight: 700;
    font-style: italic;
    font-size: 30px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-transform: none;
    text-align: center;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;

    margin: 20px 0px;
    font-size: 5vw;
    color: #FFFFFF;
    letter-spacing: 0;
  }
`;

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
      <StyledHero>

          <div className="h--hero-text">
            <h2>Com Hem TV Hub</h2>
            <h1>En världsnyhet inom hemmaunderhållning</h1>
          </div>
          <CenterWrapper>
        </CenterWrapper>
      </StyledHero>
    )
  }
}

export default HomeHero;
