import React from 'react'
import { View, Text, Button } from 'react-native'

function Login({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text>This is Login</Text>
            <Button title="click" onPress={() => navigation.navigate('MobileNumber')} />
        </View>
    )
}

export default Login
