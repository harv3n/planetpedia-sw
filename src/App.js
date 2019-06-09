import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Particles from 'react-particles-js'
import './App.css';

import Home from './components/home'
import Planet from './components/planet'

/**
 * Define particles options
 */
const particlesOptions = {
  particles: {
    number: {
        value: 100,
        density: {
            enable: true,
            value_area: 500
        }
    },
    line_linked: {
        enable: false,
        opacity: 0.02
    },
    move: {
        direction: "none",
        speed: 0.4
    },
    size: {
        value: 1
    },
    opacity: {
        anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05
        }
    }
  },
  interactive: {
    events: {
      onresize: {
        enable: true,
        density_auto: true,
        density_area: 400
      }
    }
  },
  retina_detect: true
}

class App extends Component {
  render() {  
  return (
    <div>
      <div>
        <Particles className='particles' params={particlesOptions} />
      </div>
      <div className="App">
        <BrowserRouter>
          <Route exact path={'/'} component={Home} />
          <Route path={'/planetpedia'} component={Planet} />
        </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;
