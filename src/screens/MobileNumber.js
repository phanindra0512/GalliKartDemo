import React from 'react'
import { View, Text, Button } from 'react-native'

function MobileNumber({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text>This is MobileNumber</Text>
            <Button title="click" onPress={() => navigation.navigate('Verification')} />
        </View>
    )
}

export default MobileNumber
