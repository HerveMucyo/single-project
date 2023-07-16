import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/profile/Profile';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen name="" component={SignInScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
            labelStyle: { fontSize: 12 },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'account';
              } else if (route.name === 'Settings') {
                iconName = 'cog';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={color}
                  size={size}
                />
              );
            },
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
