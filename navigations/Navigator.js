// navigation/Navigator.js
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Navigator = createStackNavigator({
  Home: HomeScreen,
  Categories: CategoriesScreen,
  Cart: CartScreen,
  Profile: ProfileScreen,
});

export default Navigator;