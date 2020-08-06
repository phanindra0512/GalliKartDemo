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
import ProductList from './src/screens/ProductList'
import MedicineList from './src/screens/MedicineList';
import ParcelDetails from './src/screens/ParcelDetails'
import ProductDetails from './src/screens/ProductDetails'

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
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="MyOrders" component={MyOrders} />
    </Drawer.Navigator>
  )
}


function App() {
  console.disableYellowBox = true;
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
        <Stack.Screen name="ProductList" component={ProductList}  />
        <Stack.Screen name="MedicineList" component={MedicineList}  />
        <Stack.Screen name="ParcelDetails" component={ParcelDetails}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
