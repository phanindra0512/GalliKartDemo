import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MobileNumber from './src/screens/MobileNumber'
import Verification from './src/screens/Verification'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'


const Stack = createStackNavigator()


function App() {
  return (

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#EF820D" />
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
