import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './src/components/CustomDrawer'
import MobileNumber from './src/screens/MobileNumber'
import Verification from './src/screens/Verification'
import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import RegisterSuccess from './src/screens/RegisterSuccess'
import Loading from './src/screens/Loading'
import Dashboard from './src/screens/Dashboard'
import MyOrders from './src/screens/MyOrders'
import Groceries from './src/screens/Groceries'
import Pharmacy from './src/screens/Pharmacy'
import ProductDetails from './src/screens/ProductDetails'
import CartDetails from './src/screens/CartDetails'
import ChooseVendor from './src/screens/ChooseVendor'
import PaymentScreen from './src/screens/PaymentScreen'
import Success from './src/screens/Success'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerView() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#fff',
        width: 250,
      }}
      drawerContentOptions={{
        activeTintColor: '#002F72',
        activeBackgroundColor: '#fff',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor: '#002F72',
        labelStyle: { fontFamily: 'ProximaNova-Bold', fontSize: 18 },
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
    </Drawer.Navigator>
  )
}


function App() {
  console.disableYellowBox = true;
  navigator.geolocation = require('@react-native-community/geolocation');


  return (

    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#002459" />
      <Stack.Navigator initialRouteName={Loading}>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DrawerView} options={{ headerShown: false }} />
        <Stack.Screen name="Groceries" component={Groceries} options={{ headerShown: false }} />
        <Stack.Screen name="Pharmacy" component={Pharmacy} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />

        <Stack.Screen name="ProductDetails" component={ProductDetails}
          options={{
            title: "Product Detail",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'ProximaNova-Bold',
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: '#002F72'
            },
          }}
        />

        <Stack.Screen name="CartDetails" component={CartDetails}
          options={{
            title: "Cart Detail",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'ProximaNova-Bold',
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: '#002F72'
            },
          }}
        />

        <Stack.Screen name="ChooseVendor" component={ChooseVendor}
          options={{
            title: "Select Vendor",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'ProximaNova-Bold',
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: '#002F72'
            },
          }}
        />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen}
          options={{
            title: "Payment",
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'ProximaNova-Bold',
              fontSize: 23
            },
            headerStyle: {
              backgroundColor: '#002F72'
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
