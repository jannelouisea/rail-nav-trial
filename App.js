import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './src/screens/home/HomeScreen';
import NewsScreen from './src/screens/news/NewsScreen';
import BillsScreen from './src/screens/bills/BillsScreen';
import ProposalsScreen from './src/screens/proposals/ProposalsScreen';

const Root = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Root.Navigator initialRouteName="Home">
      <Root.Screen name="Home" component={HomeScreen}/>
      <Root.Screen name="News" component={NewsScreen}/>
      <Root.Screen name="Bills" component={BillsScreen}/>
      <Root.Screen name="Proposals" component={ProposalsScreen}/>
    </Root.Navigator>
    </NavigationContainer>
  );
}
