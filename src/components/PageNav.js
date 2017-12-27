import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import BuyButton from '../components/BuyButton'

class PageNav extends Component {
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
      <div id="page-nav">
        <h1>Com hem</h1>
        <nav id="page-nav-links">
          {this.props.routesobj.map((route, i) => (
            <NavLink key={i} {...route} />
          ))}
          <BuyButton path="http://google.se" text="Köp nu" />
        </nav>
      </div>
    )
  }
}

export default PageNav;
