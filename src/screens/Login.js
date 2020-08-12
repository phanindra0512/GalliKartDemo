import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, KeyboardAvoidingView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function Login({ navigation }) {

    const [isMobile, setIsMobile] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const Theme = { colors: { primary: '#002F72', text: 'black', placeholder: 'black', } }

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={require('../../assets/bgImage.jpeg')} style={{ flex: 1, resizeMode: "cover", justifyContent: 'center' }}>
                <View style={{ flex: 0.8, backgroundColor: '#fff', marginHorizontal: 15, elevation: 10, borderRadius: 5, }}>
                    <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../assets/Logo.jpeg')} style={{ width: 100, height: 100, borderRadius: 100, borderWidth: 2, borderColor: '#002F72', }} />
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={{ textAlign: 'center', fontSize: 25, paddingVertical: 10, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>Login</Text>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', }}>
                            <TextInput
                                style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                                keyboardType="number-pad"
                                // theme={Theme}
                                label="Mobile Number"
                                value={isMobile}
                                mode="outlined"
                                dense
                                onChangeText={isMobile => setIsMobile(isMobile)}
                            />
                        </View>

                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', }}>
                            <TextInput
                                style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                                secureTextEntry
                                label="Password"
                                value={isPassword}
                                mode="outlined"
                                dense
                                onChangeText={isPassword => setIsPassword(isPassword)}
                            />
                        </View>
                        <Text style={{ fontSize: 13, fontFamily: 'ProximaNova-Bold', textAlign: 'right', paddingRight: 30, color: '#002F72' }}>Forgot Password ?</Text>
                        <View style={{ flex: 0.22, alignItems: 'center', justifyContent: 'center' }}>
                            <Button
                                contentStyle={{ backgroundColor: '#002F72', width: 250, borderRadius: 5 }}
                                labelStyle={{ color: '#fff' }}
                                onPress={() => navigation.replace('Dashboard')}
                            >
                                Login
                            </Button>
                        </View>
                        <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 13, color: '#002F72' }}>Don't have an account ? </Text>
                            <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 13, color: '#002F72' }} onPress={() => { console.log('signup pressed'); navigation.navigate('MobileNumber') }} >Signup </Text>

                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login
