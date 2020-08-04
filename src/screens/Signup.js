import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { TextInput, } from 'react-native-paper'

function Signup({ navigation }) {

    const [isFirstName, setIsFirstName] = useState('')
    const [isLastName, setIsLastName] = useState('')
    const [isEmail, setisEmail] = useState('')
    const [isPassword, setIsPassword] = useState('')
    const [isConfirmPassword, setIsConfirmPassword] = useState('')

    return (
        <View style={{ flex: 1, }}>
            <ImageBackground source={require('../../assets/bgImage.jpeg')} style={{ flex: 1, resizeMode: "cover", justifyContent: 'center' }}>
                <View style={{ flex: 0.85, backgroundColor: '#fff', marginHorizontal: 15, borderRadius: 5, elevation: 10, }}>
                    <Text style={{ fontSize: 26, fontFamily: 'ProximaNova-Bold', textAlign: 'center', color: '#002F72', paddingTop: 20 }}>Create Account</Text>
                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 14, color: '#888', textAlign: 'center', }}>Create a new account</Text>

                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput
                            style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                            label="First Name"
                            value={isFirstName}
                            mode="outlined"
                            dense
                            onChangeText={isFirstName => setIsFirstName(isFirstName)}
                        />
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput
                            style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                            label="Last Name"
                            value={isLastName}
                            mode="outlined"
                            dense
                            onChangeText={isLastName => setIsLastName(isLastName)}
                        />
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput
                            style={{ width: 250 }}
                            label="Email"
                            value={isEmail}
                            mode="outlined"
                            dense
                            onChangeText={isEmail => setisEmail(isEmail)}
                        />
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput
                            style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                            label="Password"
                            secureTextEntry
                            value={isPassword}
                            mode="outlined"
                            dense
                            onChangeText={isPassword => setIsPassword(isPassword)}
                        />
                    </View>
                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput
                            style={{ width: 250, fontFamily: 'ProximaNova-Bold' }}
                            label="Confirm Password"
                            secureTextEntry
                            value={isConfirmPassword}
                            mode="outlined"
                            dense
                            onChangeText={isConfirmPassword => setIsConfirmPassword(isConfirmPassword)}
                        />
                    </View>

                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: '#002F72', width: 90, paddingVertical: 8, borderRadius: 5 }} onPress={() => navigation.navigate('RegisterSuccess')} >
                            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#fff', }}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}


export default Signup


