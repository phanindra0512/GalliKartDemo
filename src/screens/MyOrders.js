import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
function MyOrders({ navigation, props }) {
    return (
        <View style={{ flex: 1, }}>
            <HeaderComponent title="My orders" name="arrow-left" size={23} {...props} />
        </View>
    )
}

export default MyOrders
