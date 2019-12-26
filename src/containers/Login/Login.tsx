import React from 'react';
import { View, Alert } from 'react-native';
import { getUser, setUser } from '../../core/storage';
import { user } from '../../dummyData';

export const Login: React.FC = props => {


  const showUser = async () => {
    const user = await getUser();
    Alert.alert(JSON.stringify(user))
  }

  setUser(user);
  showUser();

  return (
    <View style={{ flex: 1 }}>

    </View>
  )


}

