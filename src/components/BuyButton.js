import React, { Component } from 'react'
import styled from 'styled-components'

const StyledBuyButton = styled.div`
  float: left;
  margin-left: 30px;
  a {
    color: #fff;
    text-decoration: none;
    background: #029940;
    border-radius: 100px;
    padding: 10px 27px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 2px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

class BuyButton extends Component {
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
      <StyledBuyButton>
          <a href={this.props.path} className="BuyButton" target="_blank">
            {this.props.text}
          </a>
      </StyledBuyButton>
    )
  }
}

export default BuyButton;
