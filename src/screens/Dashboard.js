import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import DashboardHeader from '../components/DashboardHeader'
import ImageSnapCarousel from '../components/ImageSnapCarousel'
import { ActivityIndicator, Colors } from "react-native-paper";
import { SkypeIndicator } from 'react-native-indicators'
function Dashboard({ navigation, props }) {

    const [isAnimating, setIsAnimating] = useState(true)

    const closeIndicator = () => {
        setTimeout(() => {
            setIsAnimating(false)
        }, 2000)
    }
    useEffect(() => {
        closeIndicator()
    }, [])

    return (
        <View style={{ flex: 1, }}>
            <DashboardHeader title="Dashboard" name="menu" size={23} {...props} />

            {
                isAnimating ?
                    (
                        <View
                            style={{ flex: 1, justifyContent: "center", alignSelf: "center", }}
                        >
                            <SkypeIndicator animating={true} color='#002F72' />
                        </View>
                    ) :
                    (
                        <ScrollView>
                            <ImageBackground source={require('../../assets/DashboardBackground.jpg')} style={{ width: '100%', height: 350, }}>
                                <Text style={{
                                    fontSize: 45, color: '#002F72', fontFamily: 'ProximaNova-Bold', textAlign: 'left', paddingTop: 150, paddingLeft: 10, textShadowColor: "rgba(0, 0, 0, 0.9)",
                                    textShadowOffset: { width: -1, height: 1 },
                                    textShadowRadius: 8,
                                }}>You can always find something you want</Text>
                            </ImageBackground>
                            <View style={{ flex: 1, marginVertical: 10 }}>
                                <ImageSnapCarousel />
                            </View>
                            <View style={{ flex: 1, }}>
                                <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', paddingVertical: 15, paddingLeft: 15, color: '#002F72' }}>shop by categories</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Groceries')}>
                                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }} >
                                        <Image source={require('../../assets/Groceries.jpg')} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 1, borderColor: '#000' }} />
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, textAlign: 'center', color: '#002F72' }}>Groceries</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Pharmacy')}>
                                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/pharma.jpg')} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 1, borderColor: '#000' }} />
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, textAlign: 'center', color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('Not available right now')}>
                                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../../assets/Parcel.png')} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 1, borderColor: '#000' }} />
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, textAlign: 'center', color: '#002F72' }}>Parcel</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'red', marginVertical: 10, marginHorizontal: 10, borderColor: '#002F72', borderWidth: 1, borderRadius: 5 }}>
                                <Image source={require('../../assets/Dashboard1.jpg')} style={{ width: '100%', height: 100, }} />
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'red', marginTop: 5, marginBottom: 10, marginHorizontal: 10, borderColor: '#002F72', borderWidth: 1, borderRadius: 5 }}>
                                <Image source={require('../../assets/Dashboard2.jpg')} style={{ width: '100%', height: 100, }} />
                            </View>
                        </ScrollView>
                    )
            }
        </View>
    )
}

export default Dashboard
