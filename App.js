import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';

// Screens
import HomeScreen from './src/screens/home/HomeScreen';
import NewsScreen from './src/screens/news/NewsScreen';
import BillsScreen from './src/screens/bills/BillsScreen';
import ProposalsScreen from './src/screens/proposals/ProposalsScreen';

// Route Names
const ROUTES = {
  HOME: "Home",
  NEWS: "News",
  BILLS: "Bills",
  PROPOSALS: "Proposals"
};

const Root = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Root.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          switch(route.name) {
            case ROUTES.HOME:
              return <FontAwesome5 name="warehouse" size={20}/>
            case ROUTES.NEWS:
              return <FontAwesome5 name="newspaper" size={20} />
            case ROUTES.BILLS:
              return <FontAwesome5 name="toilet-paper" size={20} />
            case ROUTES.PROPOSALS:
              return <FontAwesome5 name="lightbulb" size={20}/>
            default:
              return <FontAwesome5 name="plus" size={20}/>
          } 
      }
    })
    }
    tabBarOptions={{showLabel: false}}
    >
      <Root.Screen 
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Root.Screen name={ROUTES.NEWS} component={NewsScreen}/>
      <Root.Screen name={ROUTES.BILLS} component={BillsScreen}/>
      <Root.Screen name={ROUTES.PROPOSALS} component={ProposalsScreen}/>
    </Root.Navigator>
    </NavigationContainer>
  );
}
