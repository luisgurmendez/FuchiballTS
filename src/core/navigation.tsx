import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, NavigationParams } from "react-navigation";
import { Team } from '../containers/Team/Team';
import { Match } from '../containers/Match/Match';
import { Login } from '../containers/Login/Login';
import { Splash } from '../containers/Splash/Splash';
import { Register } from '../containers/Resgister/Register';
import { Player } from '../containers/Player/Player';
import { Home } from "../containers/Home/Home";
import { NavigationActions } from 'react-navigation';
import { Test } from '../containers/Test';
import { Drawer } from "containers/Drawer/Drawer";

export const stackNavigator = createStackNavigator({
  Team: {
    screen: Team,
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Match: {
    screen: Match,
  },
  Home: {
    screen: Home
  },
  Player: {
    screen: Player
  },
  Splash: {
    screen: Splash
  },
  Test: {
    screen: Test
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    header: null,
    headerVisible: false,
    gestureResponseDistance: { horizontal: 100 }
  }
});

export const AppContainer = createAppContainer(stackNavigator);

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
