import React from 'react'
import { View, Text, Button } from 'react-native'

function Verificarion({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text>This is Verificarion</Text>
            <Button title="click" onPress={() => navigation.navigate('Signup')} />
        </View>
    )
}

export default Verificarion
