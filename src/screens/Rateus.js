import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

function Rateus({ props }) {
    return (
        <View>
            <HeaderComponent title="Rateus" name="arrow-left" size={23} {...props} />

        </View>
    )
}

export default Rateus
