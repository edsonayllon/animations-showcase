import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Button,
  TouchableHighlight
} from 'react-native';
import { Link } from '../navigation';

export default function AnimationParallel() {
  const animatedValue1 = new Animated.Value(0);
  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);

  const animate = () => {
    animatedValue1.setValue(0);
    animatedValue2.setValue(0);
    animatedValue3.setValue(0);
    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(animatedValue1, 2000, Easing.ease),
      createAnimation(animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(animatedValue3, 1000, Easing.ease, 2000)
    ]).start()
  }

  useEffect(() => {
    animate();
  }, []);

  const scaleText = animatedValue1.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 2]
  })
  const spinText = animatedValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg']
  })
  const introButton = animatedValue3.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 400]
  })

  return (
    <View>
      <Link to="/"><Button title="Back" color="#841584" /></Link>
      <Animated.View style={{ transform: [{scale: scaleText}] }}>
      <Text>Welcome</Text>
      </Animated.View>
      <Animated.View style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
        <Text style={{fontSize: 20}}>
          to the App!
        </Text>
      </Animated.View>
      <Animated.View style={{top: introButton, position: 'absolute'}}>
        <TouchableHighlight onPress={animate} style={{backgroundColor: 'blue'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Click Here To Start
          </Text>
        </TouchableHighlight>
      </Animated.View>
    </View>
  )
}
