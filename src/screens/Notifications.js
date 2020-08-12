import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

function Notifications({ props }) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent title="Notifications" name="arrow-left" size={23} {...props} />
        </View>
    )
}

export default Notifications
