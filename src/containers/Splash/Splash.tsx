import React, { useEffect } from 'react';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { Loader } from '../../components';
import jwtDecode from 'jwt-decode';
import { initApi } from '../../core/Api';
import { Auth, NoTokenError, RefreshTokenError } from 'core/Auth';
import { NavigatorService } from 'core/navigation';

export const SplashBase: React.FC<NavigationInjectedProps> = props => {
  const navigatorService = NavigatorService.getInstance();

  const handleInitApi = async () => {
    try {
      const tokens = await Auth.getStoredTokens();
      if (Auth.validateToken(tokens.authToken)) {
        initApi(tokens);
        navigatorService.navigate(navigatorService.homeScreen);
      } else {
        await Auth.refreshToken(tokens.authToken, tokens.refreshToken)
      }
    } catch (e) {
      if (e instanceof NoTokenError || e instanceof RefreshTokenError) {
        navigatorService.navigate('Login');
      }
    }
  }

  useEffect(() => {
    handleInitApi();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <Loader size={100} color={'black'} />
    </View>
  )
}

export const Splash = withNavigation(SplashBase);