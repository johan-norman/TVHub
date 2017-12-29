import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSectionNumber = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #00C3FF;
  letter-spacing: 0;
  position: relative;

  &:before {
    content: '.';
  }
  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -20px;
    width: 45px;
    height: 2px;
    background: #00C3FF;
  }
`;

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
      <StyledSectionNumber>
        {this.props.text}
      </StyledSectionNumber>
    )
  }
}

export default Entertainment;
