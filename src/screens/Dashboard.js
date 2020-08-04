import React from 'react';
import {View, Text, Image, ImageBackground,TouchableOpacity,Alert} from 'react-native';
import ImageSnapCarousel from './components/ImageCarousel';

function Dashboard() {
    return (
        <View style={{flex:1,backgroundColor:'#ccc'}}>
            <View style={{flex:1,paddingTop:10,alignSelf:'center'}}> 
                {/* <Image 
                source={require('../../assets/market.png')} style={{alignSelf:'center',marginTop:10,borderColor:'grey',borderWidth:3,borderRadius:5,height:200,width:350}}
                /> */}
                <ImageSnapCarousel />
            </View>
            <View style={{flex:2,justifyContent:'center'}}> 
            <View style={{ flex: 1, margin: 10, borderColor: 'grey', borderWidth: 2, borderRadius: 5 }}>
                    <TouchableOpacity onPress={() => Alert.alert('sorry not available right now!!!')}>
                        <ImageBackground source={require('../../assets/groceries1.jpg')} style={{ width: '100%', height: '100%', opacity: 0.8, justifyContent: 'center', }}>
                            <Text style={{ textAlign: 'center', fontSize: 30,  color: '#0200C1',fontWeight:'bold', textShadowColor: "skyblue", textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5 }}>GROCERIES</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View   style={{ flex: 1, marginHorizontal: 10, borderColor: 'grey', borderWidth: 2, borderRadius: 5 }}>
                    <TouchableOpacity onPress={() => Alert.alert('sorry not available right now!!!')} >
                        <ImageBackground source={require('../../assets/doctor2.jpg')} style={{ width: '100%', height: '100%', opacity: 0.8, justifyContent: 'center', }}>
                            <Text style={{ textAlign: 'center', fontSize: 30,  color: '#0200C1',fontWeight:'bold', textShadowColor: "skyblue", textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5 }}>PHARMACY</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View   style={{ flex: 1, margin: 10, borderColor: 'grey', borderWidth: 2, borderRadius: 5 }}>
                    <TouchableOpacity onPress={() => Alert.alert('sorry not available right now!!!')}>
                        <ImageBackground source={require('../../assets/delivery.jpg')} style={{ width: '100%', height: '100%', opacity: 0.8, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 30, color: '#0200C1',fontWeight:'bold', textShadowColor: "skyblue", textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5 }}>PARCEL</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Dashboard
