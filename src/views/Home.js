import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import HomeHero from '../components/Home/HomeHero.js'
import Enteraintainment from '../components/Home/Entertainment.js'
import CollectApps from '../components/Home/CollectApps.js'
import VoiceControl from '../components/Home/VoiceControl.js'
import ImageQuality from '../components/Home/ImageQuality.js'


class Home extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    // do something like call `this.setState`
    // access window.scrollY etc
  }
  render() {
    return (
      <Page>
        <HomeHero></HomeHero>
        <Enteraintainment></Enteraintainment>
        <CollectApps></CollectApps>
        <VoiceControl></VoiceControl>
        <ImageQuality></ImageQuality>
        <Helmet title='Home' />
      </Page>
    )
  }
}

export default Home;
