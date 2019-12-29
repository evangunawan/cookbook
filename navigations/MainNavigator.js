import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import LoadingScreen from "../screens/Auth/LoadingScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: RegistrationScreen
  }
});
const AppStack = createStackNavigator({Dashboard: DashboardScreen});

const MainNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default MainNavigator;