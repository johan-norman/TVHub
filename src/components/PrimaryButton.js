import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledPrimaryBtn = styled.a`
  display: inline-block;
  background: #029940;
  border-radius: 3px;
  padding: 11px 24px;

  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
`;

class PrimaryButton extends Component {
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
      <StyledPrimaryBtn href={this.props.path}>
        {this.props.text}
      </StyledPrimaryBtn>
    )
  }
}

export default PrimaryButton;
