import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavLink from '../components/NavLink'
import BuyButton from '../components/BuyButton'
import Logo from '../components/images/ComHem_Logotype@2x.png'
import CenterWrapper from '../components/CenterWrapper'
import styled from 'styled-components'

const StyledPageNav = styled.section`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  > div {
    padding: 14px 0px;
  }

`;

const StyledNav = styled.nav`
  float: right;
  position: relative;
  top: 5px;
`;

class PageNav extends Component {
  componentDidMount() {
    console.log(this.props.routesobj);
  }

  componentWillUnmount() {

  }

  handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc
  }
  render() {
    return (
      <StyledPageNav>
        <CenterWrapper>
          <Link to="/"><img width="131" height="31" src={Logo} alt="Com Hem TV Hub - Logo" /></Link>
          <StyledNav>
            <NavLink title="Funktioner" path="/features" />
            <NavLink title="Jämför" path="/compare" />
            <BuyButton path="http://google.se" text="Köp nu" />
          </StyledNav>
        </CenterWrapper>
      </StyledPageNav>
    )
  }
}

export default PageNav;
