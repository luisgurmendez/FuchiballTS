import React from 'react';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { View } from 'react-native';

export const DefaultPlayerAvatar: React.FC = () => {
  return (
    <View style={{ height: 120, borderTopLeftRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 15, backgroundColor: '#eee' }}>
      <Icon name="user-circle" size={50} color="#dddddd" />
    </View>
  )
}

