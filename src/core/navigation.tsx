import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, NavigationParams } from "react-navigation";
import { Team } from '../containers/Team/Team';
import { Match } from '../containers/Match/Match';
import { Login } from '../containers/Login/Login';
import { match } from '../dummyData';
import { Splash } from '../containers/Splash/Splash';
import { NavigationActions } from 'react-navigation';

export const AppNavigator = createStackNavigator({
  Team: {
    screen: Team,
  },
  Login: {
    screen: Login
  },
  Match: {
    screen: Match,
  },
  Splash: {
    screen: Splash
  },
}, {
  initialRouteName: 'Team',
  headerMode: 'none',
  navigationOptions: {
    header: null,
    headerVisible: false,
    gestureResponseDistance: { horizontal: 100 }
  }
});

export const AppContainer = createAppContainer(AppNavigator);

export class NavigatorService {
  private navigator: any;
  private static instance: NavigatorService;

  public static getInstance(): NavigatorService {

    if (!this.instance) {
      this.instance = new NavigatorService();
    }
    return this.instance;
  }


  setTopLevelNavigator(navigatorRef: any) {
    this.navigator = navigatorRef;
  }

  navigate(routeName: string, params?: NavigationParams) {
    this.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }
}
