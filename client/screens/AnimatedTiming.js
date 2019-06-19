import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';
import { Link } from '../navigation';

export default function AnimationTiming() {
  const [spinValue, setSpinValue] = useState(new Animated.Value(0));
  return (
    <View>
      <Link to="/"><Text>Back</Text></Link>
    </View>
  )
}
