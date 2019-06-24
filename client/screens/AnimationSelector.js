import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '../navigation';

export default function AnimationSelector() {
  return (
    <View>
      <Link to="/timing"><Text>Animated Timing</Text></Link>
      <Link to="/timing2"><Text>Animated Timing Examples</Text></Link>
    </View>
  )
}
