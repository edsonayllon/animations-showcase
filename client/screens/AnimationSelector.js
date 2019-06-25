import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from '../navigation';

export default function AnimationSelector() {
  return (
    <View>
      <Link to="/timing"><Button title="Animated Timing" color="#841584" /></Link>
      <Link to="/timing2"><Button title="Animated Timing Examples" color="#841584" /></Link>
      <Link to="/spring"><Button title="Animated Spring" color="#841584" /></Link>
      <Link to="/parallel"><Button title="Animated Parallel" color="#841584" /></Link>
    </View>
  )
}
