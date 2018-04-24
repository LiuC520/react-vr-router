import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import TS1 from './src/test'
import TS2 from './src/test_1'

class Example extends Component{
  render(){
    return(
      <Router>
        <View>
          <Route exact path='/' component={TS1}/>
          <Route exact path='/test_1' component={TS2}/>
          <Route exact path='/test' component={TS1}/>
        </View>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Example', () => Example);