import React, { useState } from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, } from 'react-native-paper'

function MobileNumber({ navigation }) {

    const [isMobile, setIsMobile] = useState('')
    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={require('../../assets/bgImage.jpeg')} style={{ flex: 1, resizeMode: "cover", justifyContent: 'center' }}>
                <View style={{ flex: 0.5, backgroundColor: '#fff', marginHorizontal: 15, borderRadius: 5, elevation: 10, alignItems: 'center', }}>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                        {/* <Image source={require('../../assets/Logo.jpeg')} style={{ width: 100, height: 100, borderRadius: 100 }} /> */}
                        <MaterialCommunityIcons name="cellphone-message" size={55} color="#002F72" />
                    </View>
                    <Text style={{ fontSize: 20, paddingTop: 5, lineHeight: 20, color: '#002F72', letterSpacing: 1, fontFamily: 'ProximaNova-Bold' }}>We will send you a OTP</Text>
                    <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', paddingTop: 5, lineHeight: 20, color: '#002F72', }}>to your mobile number.</Text>
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <TextInput
                            style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                            keyboardType="number-pad"
                            label="Mobile Number"
                            value={isMobile}
                            mode="outlined"
                            dense
                            onChangeText={isMobile => setIsMobile(isMobile)}
                        />
                        <View style={{ flex: 0.2, backgroundColor: '#002F72', alignSelf: 'flex-end', padding: 10, marginTop: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="chevron-right" size={20} color="#fff" onPress={() => navigation.navigate('Verification')} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default MobileNumber
