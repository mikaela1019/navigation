import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import WelcomePage from './src/screens/WelcomePage';
import RegisterScreen from './src/screens/RegisterScreen';
import RegisterAdminScreen from './src/screens/RegisterAdminScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomePageScreen from './src/screens/HomePageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={{flexGrow: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomePage" screenOptions={{headerShown: false}}>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="RegisterAdminScreen" component={RegisterAdminScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
