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

const arr = []
for (var i = 0; i < 500; i++) {
  arr.push(i)
}

export default function AnimationParallel() {
  const animatedValues = [];
  arr.forEach((value) => {
    animatedValues[value] = new Animated.Value(0)
  });


  const animate = () => {
    const animations = arr.map((item) => {
      return Animated.timing(
        animatedValues[item],
        {
          toValue: 1,
          duration: 4000
        }
      )
    })
    Animated.stagger(10, animations).start()
  }

  useEffect(() => {
    animate();
  }, []);

  const animations = arr.map((a, i) => {
    return (
      <Animated.View key={i} style={{
        opacity: animatedValues[a],
        height: 20,
        width: 20,
        backgroundColor: 'red',
        marginLeft: 3,
        marginTop: 3
      }} />
    )
  })

  return (
    <View>
      <Link to="/"><Button title="Back" color="#841584" /></Link>
      <View style={{display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {animations}
      </View>
    </View>

  )
}
