import React, { useEffect } from 'react';
import { getTokens } from '../../core/storage';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { View, Alert } from 'react-native';
import { Loader } from '../../components';
import jwtDecode from 'jwt-decode';
import { refreshToken, getUsers } from '../../core/api';

export const SplashBase: React.FC<NavigationInjectedProps> = props => {

  useEffect(() => {
    getTokens().then((tokens) => {
      if (tokens !== undefined) {
        const tokenData = jwtDecode<{ exp: number }>(tokens.authToken);
        if (tokenData !== null && typeof tokenData === 'object') {
          if (Date.now() < tokenData!.exp * 1000) {
            props.navigation.navigate('Team');
            return;
          } else {
            // Refresh token;
            refreshToken(tokens.authToken, tokens.refreshToken).then(() => {
              props.navigation.navigate('Team');
            }).catch(() => {
              props.navigation.navigate('Login');
            });
          }
        }
      } else {
        props.navigation.navigate('Login');
      }
    })
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <Loader size={100} color={'black'} />
    </View>
  )
}

export const Splash = withNavigation(SplashBase);