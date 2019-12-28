import React, { useState } from 'react';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styled from 'styled-components/native';
import { Animated, Easing } from 'react-native';

interface LoaderProps {
  size?: number;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 25, color = "white" }) => {

  const [spinValue] = useState(new Animated.Value(0));

  // First set up animation 
  Animated.loop(Animated.timing(
    spinValue,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }
  )).start()

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  //TODO: Make it animatable
  // transform: [{ rotate: spin }] }}
  return (
    <Icon name="futbol" size={size} color={color} />
  )
}