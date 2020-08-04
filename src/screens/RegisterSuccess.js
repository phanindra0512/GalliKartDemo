import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function RegisterSuccess({ navigation }) {


    useEffect(() => {
        const phani = () => {

            setTimeout(() => {
                navigation.navigate('Login')
            }, 2000)
        }
        phani();

    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 0.5, backgroundColor: '#fff', marginHorizontal: 20, borderRadius: 10, elevation: 10, alignItems: 'center', justifyContent: 'center' }}>
                <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={50} color="green" />
                <Text style={{ fontSize: 25, fontFamily: 'ProximaNova-Bold', color: "#002F72", paddingTop: 20 }}>Registered Successfully</Text>
            </View>
        </View>
    )
}

export default RegisterSuccess
