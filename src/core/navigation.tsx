import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Team } from '../containers/Team/Team';
import { Match } from '../containers/Match/Match';
import { Login } from '../containers/Login/Login';
import { match } from '../dummyData';

export const AppNavigator = createStackNavigator({
  Team: {
    screen: Team,
  },
  Login: {
    screen: Login
  },
  Match: {
    screen: () => <Match match={match} />,
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  navigationOptions: {
    header: null,
    headerVisible: false,
    gestureResponseDistance: { horizontal: 400 }
  }
});

export const AppContainer = createAppContainer(AppNavigator);