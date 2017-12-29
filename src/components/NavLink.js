import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled.div`
  float: left;
  margin-left: 30px;
  a {
    transition: color 0.2s, border-bottom-color 0.2s;
    color: ${props => props.active ? '#00C3FF' : '#fff'};
    text-decoration: none;
    border-bottom: 2px solid;
    border-bottom-color: ${props => props.active ? 'rgba(0, 0, 255, 0.1)' : 'transparent'};

    opacity: 0.86;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 300;

    &:hover, &:active, &:focus {
      color: ${props => props.active ? '#00C3FF' : '#00C3FF'};
    }
  }
`

export default ({path, exact, ...props}) => (
  <Route path={path} exact={exact} children={({match}) => (
    <NavLink active={match}>
      <Link to={path}>{props.title}</Link>
    </NavLink>
  )} />
)
