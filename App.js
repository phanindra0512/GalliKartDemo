import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MobileNumber from './src/screens/MobileNumber'
import Verification from './src/screens/Verification'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import RegisterSuccess from './src/screens/RegisterSuccess'
import Loading from './src/screens/Loading'


const Stack = createStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#002F72" />
      <Stack.Navigator initialRouteName={Loading}>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
