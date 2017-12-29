import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from './views/Home'
import Features from './views/Features'
import Compare from './views/Compare'
import NoMatch from './views/NoMatch'
import Wrapper from './components/Wrapper'
import PageNav from './components/PageNav'

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
    //setTimeout(() => this.setState({ loading: false }), 1500); // simulates loading of data
    setTimeout(() => this.setState({ loading: false }), 0); // simulates loading of data

    //loader
    var letters = document.getElementById("loader-txt").childNodes;
    for (var i = 0; i < letters.length; i++) {
      //letters[i].classList.add('animated');
      //console.log(letters[1].classList[0]);
    }

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
