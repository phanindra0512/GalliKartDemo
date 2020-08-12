import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import Login from './Login'

function Loading({ navigation }) {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const callScreen = () => {
            setTimeout(() => {
                setIsLoading(false)
                navigation.replace('Login')
            }, 2000)
        }
        callScreen()
        // navigation.navigate('Login', setIsLoading(false))

    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            {
                isLoading ?
                    <Image source={require('../../assets/Logo.jpeg')} style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 2, borderColor: '#002F72', }} />
                    : null
            }
        </View>
    )
}

export default Loading
