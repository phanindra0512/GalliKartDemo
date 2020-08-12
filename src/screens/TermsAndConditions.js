import React from 'react'
import { View } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

function TermsAndConditions({ props }) {
    return (
        <View>
            <HeaderComponent title="Terms & conditions" name="arrow-left" size={23} {...props} />

        </View>
    )
}

export default TermsAndConditions
