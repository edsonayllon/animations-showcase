import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Router, Route } from './';
import {
  AnimationSelector,
  AnimatedTiming
} from '../screens';

export default function MainRouter() {
  return (
    <Router>
      <View>
        <Route exact path="/" component={AnimationSelector} />
        <Route exact path="/timing" component={AnimatedTiming} />
      </View>
    </Router>
  )
}
