import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DashboardHeader from '../components/DashboardHeader'
import ImageSnapCarousel from '../components/ImageSnapCarousel'

function Dashboard({ navigation, props }) {



    // useEffect(() => {
    //     const wish = () => {
    //         setInterval(() => {
    //             setIsWish(true)
    //         }, 2000)
    //     }
    //     wish()

    // }, [])

    return (
        <View style={{ flex: 1, }}>
            <DashboardHeader title="Dashboard" name="menu" size={23} {...props} />
            <ScrollView>
                {/* {
                    isWish ?
                        <View style={{ flex: 0.2, backgroundColor: '#002F72', paddingVertical: 15, }}>
                            <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', textAlign: 'right', color: '#fff', paddingRight: 15 }}>Good morning phanindra !!!</Text>
                        </View> :
                        <View>
                            <Text>finish</Text>
                        </View>
                } */}
                <ImageBackground source={{ uri: 'https://images.seekbusiness.com.au/client/original/19210/40e6419c-3d7b-41e2-b811-b5d25db64247.jpg' }} style={{ width: '100%', height: 350, }}>
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
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT970pg7X_HnpBhmov_hQXGljzTNiFZp4hDPg&usqp=CAU' }} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 1, borderColor: '#000' }} />
                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, textAlign: 'center', color: '#002F72' }}>Groceries</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: 'https://nu.aeon.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/header_sized-kendal-l4ikccachoc-unsplash.jpg' }} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 1, borderColor: '#000' }} />
                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, textAlign: 'center', color: '#002F72' }}>Pharmacy</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: 'https://www.kindpng.com/picc/m/65-653183_defence-courier-service-tracking-hd-png-download.png' }} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 1, borderColor: '#000' }} />
                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, textAlign: 'center', color: '#002F72' }}>Parcel</Text>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: 'red', marginVertical: 10, marginHorizontal: 10, borderColor: '#002F72', borderWidth: 1, borderRadius: 5 }}>
                    <Image source={{ uri: 'https://i.pinimg.com/originals/6c/c8/23/6cc823ccbe8086c16f0ccf07ee898984.jpg' }} style={{ width: '100%', height: 100, }} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'red', marginTop: 5, marginBottom: 10, marginHorizontal: 10, borderColor: '#002F72', borderWidth: 1, borderRadius: 5 }}>
                    <Image source={{ uri: 'https://www.grocerysumo.com/media/slider/home/lyu4eat9_grocery-oil-banner.jpg' }} style={{ width: '100%', height: 100, }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard
