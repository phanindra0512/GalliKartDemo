import React, { useState } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, } from 'react-native-paper'

function Verification({ navigation }) {

    const [isOtp, setIsOtp] = useState('')
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={require('../../assets/bgImage.jpeg')} style={{ flex: 1, resizeMode: "cover", justifyContent: 'center' }}>
                <View style={{ flex: 0.5, backgroundColor: '#fff', marginHorizontal: 15, borderRadius: 5, elevation: 10, alignItems: 'center', }}>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                        {/* <Image source={require('../../assets/Logo.jpeg')} style={{ width: 100, height: 100, borderRadius: 100 }} /> */}
                        <MaterialCommunityIcons name="message-text" size={50} color="#002F72" />
                    </View>
                    <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', paddingTop: 5, lineHeight: 20, color: '#002F72' }}>You will get OTP via SMS</Text>
                    <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', paddingTop: 5, lineHeight: 20, color: '#002F72' }}>to verify account.</Text>
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput
                            style={{ width: 250 }}
                            keyboardType="number-pad"
                            label="Enter OTP"
                            value={isOtp}
                            mode="outlined"
                            dense
                            onChangeText={isOtp => setIsOtp(isOtp)}
                        />
                        <View style={{ flex: 0.2, backgroundColor: '#002F72', alignSelf: 'flex-end', padding: 10, marginTop: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="chevron-right" size={20} color="#fff" onPress={() => navigation.navigate('Signup')} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Verification
