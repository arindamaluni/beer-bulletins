import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import all screens for tab nav
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function homeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  );
};

function TabNavigationRoutes(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="homeScreenStack" component={homeScreenStack} />
    </Tab.Navigator>
  );
}

export default TabNavigationRoutes;
