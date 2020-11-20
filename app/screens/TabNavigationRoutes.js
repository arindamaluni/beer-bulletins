import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottleshopScreen from './BottleshopScreen';
//import all screens for tab nav
import HomeScreen from './HomeScreen';
import MyReviewsScreen from './MyReviewsScreen';
import ProfileScreen from './ProfileScreen';

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
}

function TabNavigationRoutes(props) {
  return (
    <Tab.Navigator
      initialRouteName="homeScreenStack"
      tabBarOptions={{
        activeTintColor: '#17BEBB',
      }}
    >
      <Tab.Screen
        name="homeScreenStack"
        component={homeScreenStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BottleshopScreen"
        component={BottleshopScreen}
        options={{
          tabBarLabel: 'Bottle Shop',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-beer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyReviewsScreen"
        component={MyReviewsScreen}
        options={{
          tabBarLabel: 'My Reviews',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigationRoutes;
