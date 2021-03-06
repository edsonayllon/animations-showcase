import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Router, Route } from './';
import {
  AnimationSelector,
  AnimatedTiming,
  AnimatedTiming2,
  AnimatedSpring,
  AnimatedParallel,
  AnimatedSequence,
  AnimatedStagger
} from '../screens';

export default function MainRouter() {
  return (
    <Router>
      <View>
        <Route exact path="/" component={AnimationSelector} />
        <Route exact path="/timing" component={AnimatedTiming} />
        <Route exact path="/timing2" component={AnimatedTiming2} />
        <Route exact path="/spring" component={AnimatedSpring} />
        <Route exact path="/parallel" component={AnimatedParallel} />
        <Route exact path="/sequence" component={AnimatedSequence} />
        <Route exact path="/stagger" component={AnimatedStagger} />
      </View>
    </Router>
  )
}
