import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './screens/WelcomePage';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ChatScreen from './screens/ChatScreen';
import AboutScreen from './screens/AboutScreen';
import LawDetailScreen from './screens/LawDetailScreen'; // 👈 New import added

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'LegalRights', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoryScreen}
          options={{ title: 'Legal Categories', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="LawDetail"
          component={LawDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatbot"
          component={ChatScreen}
          options={{ title: 'Chat with Legal Bot', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About Us', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
