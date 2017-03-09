// @flow

import React, { Component } from 'react';

import Waypoint from 'react-waypoint';

import Background from './Background';
import Profile from './Profile';
import Experiences from './Experiences';
import Abilities from './Abilities';
import Contact from './Contact';
import './App.css';

class App extends Component {
  state: {
    fixed: boolean,
  }

  constructor(props: any) {
    super(props);

    (this:any).onVisible = this.onVisible.bind(this);

    this.state = { fixed: false };
  }

  onVisible(visible: boolean) {
    console.log(visible);
    this.setState({ fixed: !visible });
  }

  render() {
    return (
      <div className="site">
        <Waypoint
          onEnter={() => { this.setState({ fixed: false }); }}
          onLeave={() => { this.setState({ fixed: true }); }}
        >
          <div>
            <Background />
          </div>
        </Waypoint>

        <Profile fixed={this.state.fixed}/>

        <Experiences />
        <Abilities />
        <Contact />
      </div>
    );
  }
}

export default App;
