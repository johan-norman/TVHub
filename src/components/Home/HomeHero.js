import React, { Component } from 'react'
import styled from 'styled-components'
import CenterWrapper from '../CenterWrapper'
import { TweenMax, TimelineMax } from 'gsap'

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
    overflow: hidden;
  }

  .letter {
    display: inline-block;
    line-height: 1em;
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

const WrappedLetters = function(props) {
  var letterArr = [];
  props.text.split('').map((item, key) => {
    letterArr.push(<span className="letter" key={key}>{item}</span>);
  })
  return letterArr;
};

class HomeHero extends Component {
  componentDidMount() {
    var tl = new TimelineMax();

    tl
      .staggerFrom("#hero--text-01 .letter", 1, {y: 100, opacity:0, ease:"Back.easeIn"}, 0.05)
      .from("#hero--text-02", 2, {y: 100, opacity:0, ease:"Back.easeIn"}, '-=1.5');
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <StyledHero>
          <div className="h--hero-text">
            <h2 id="hero--text-01"><WrappedLetters text="Com Hem TV Hub" /></h2>
            <h1 id="hero--text-02">En världsnyhet inom hemmaunderhållning</h1>
          </div>
        <CenterWrapper>
        </CenterWrapper>
      </StyledHero>
    )
  }
}

export default HomeHero
