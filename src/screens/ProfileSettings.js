import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'

function ProfileSettings({ props }) {
    return (
        <View style={{ flex: 1, }}>
            <HeaderComponent title="Profile Settings" name="arrow-left" size={23} {...props} />
        </View>
    )
}

export default ProfileSettings
