import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from './views/Home'
import Features from './views/Features'
import Compare from './views/Compare'
import NoMatch from './views/NoMatch'
import Wrapper from './components/Wrapper'
import PageNav from './components/PageNav'
import { TweenMax, TimelineMax } from 'gsap'

const title = "Com Hem TV Hub"

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  }, {
    title: 'Features',
    path: '/features',
    component: Features
  }, {
    title: 'Compare',
    path: '/compare',
    component: Compare
  }
]

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {

    // Loader
    var loaderLine = document.getElementById("loader-line"),
        loaderLineContainer = document.getElementById("loader-line-container"),
        loaderTxt = document.getElementById("loader-txt").childNodes,
        loaderWrapper = document.getElementById("loader"),
        loaderBg = document.getElementById("loader-bg"),
        loaderTl = new TimelineMax({ onComplete: this.loadContent });

        loaderTl
          .staggerFrom(loaderTxt, 1, {y: 100, autoAlpha:0, ease:"Back.easeIn"}, 0.03)
          .from(loaderLineContainer, 5, {x: -100, autoAlpha:0, ease: "Back.easeIn"}, '-=4')
          .from(loaderLine, 5, {x: -100, ease: "Back.easeIn"}, '-=4');

  }

  loadContent() {
    console.log("load Content");
    // Fade out loader
    
    // Fade in Content

  }

  render () {
    const { loading } = this.state;

    if(!loading) { // if your component doesn't have to wait for async data, remove this block
      document.getElementById("loader-wrap").className = "hide";
    }

    return (
      <Router>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} />
          <PageNav routesobj={routes}></PageNav>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    )
  }
}

export default App;
