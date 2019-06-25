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

export default function AnimationSpring() {
  const springValue = new Animated.Value(0.3);

  const spring = () => {
    springValue.setValue(0.9);
    Animated.spring(
      springValue,
      {
        toValue: 1,
        friction: 5
      }
    ).start();
  }

  useEffect(() => {
    spring();
  }, [])

  return (
    <View>
      <Link to="/"><Button title="Back" color="#841584" /></Link>
      <Animated.Image
        style={{
          width: 227,
          height: 200,
          marginTop: 40,
          transform: [{scale: springValue}]
        }}
        source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      />
      <Button
        onPress={spring}
        title="Again"
        color="#841584"
      />
    </View>
  )
}
