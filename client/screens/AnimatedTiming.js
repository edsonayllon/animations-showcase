import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Button
} from 'react-native';
import { Link } from '../navigation';

export default function AnimationTiming() {
  const spinValue = new Animated.Value(0);
  const spining = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.inOut(Easing.bounce)
      }
    ).start(() => spin());
  }

  useEffect(() => {
    spin();
  }, [])

  return (
    <View>
      <Link to="/"><Button title="Back" color="#841584" /></Link>
      <Animated.Image
        style={{
          width: 227,
          height: 200,
          marginTop: 40,
          transform: [{rotate: spining}]
        }}
        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      />
    </View>
  )
}
