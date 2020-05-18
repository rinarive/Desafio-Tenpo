import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Transaction from './Transaction'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Transaction: { screen: Transaction}
});
 export default AppNavigator