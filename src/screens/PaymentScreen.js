import React from 'react'
import { View, Text,Image } from 'react-native';
import{Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function PaymentScreen({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72' ,paddingLeft:15,paddingTop:10}}>Payment Methods</Text>
            <View style={{flex:1,alignItems:'center',paddingTop:20}}>
                <View style={{flex: 0.13, backgroundColor: '#fff', marginHorizontal: 20, elevation: 10, borderRadius: 5,flexDirection:'row',alignItems:'center',}}>
                    <View style={{flex:0.5}}>
                    <Image source={require('../../assets/cards.png')}  style={{width:50,height:50,borderColor:'grey',borderWidth:1,borderRadius:5,marginLeft:15}}/>

                    </View>
                    <View style={{flex:0.8}}>
                    <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Pay with Cards</Text>

                    </View>
                    <View style={{flex:0.3}}>
                    <Icon name="chevron-right" color="#002F72" size={30} />
                    </View>
                </View>
                <View style={{flex: 0.13, backgroundColor: '#fff', marginHorizontal: 20, elevation: 10, borderRadius: 5,flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <View style={{flex:0.5}}>
                    <Image source={require('../../assets/paypal-logoe.png')}  style={{width:50,height:50,borderColor:'grey',borderWidth:1,borderRadius:5,marginLeft:15}}/>

                    </View>
                    <View style={{flex:0.8}}>
                    <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Paypal</Text>

                    </View>
                    <View style={{flex:0.3}}>
                    <Icon name="chevron-right" color="#002F72" size={30} />
                    </View>
                </View>
                <View style={{flex: 0.13, backgroundColor: '#fff', marginHorizontal: 20, elevation: 10, borderRadius: 5,flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <View style={{flex:0.5}}>
                    <Image source={require('../../assets/iphonelogo.jpg')}  style={{width:50,height:50,borderColor:'grey',borderWidth:1,borderRadius:5,marginLeft:15}}/>

                    </View>
                    <View style={{flex:0.8}}>
                    <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Apple Pay</Text>

                    </View>
                    <View style={{flex:0.3}}>
                    <Icon name="chevron-right" color="#002F72" size={30} />
                    </View>
                </View>
                <View style={{flex: 0.13, backgroundColor: '#fff', marginHorizontal: 20, elevation: 10, borderRadius: 5,flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <View style={{flex:0.5}}>
                    <Image source={require('../../assets/glogom.jpg')}  style={{width:50,height:50,borderColor:'grey',borderWidth:1,borderRadius:5,marginLeft:15}}/>

                    </View>
                    <View style={{flex:0.8}}>
                    <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Google Pay</Text>

                    </View>
                    <View style={{flex:0.3}}>
                    <Icon name="chevron-right" color="#002F72" size={30} />
                    </View>
                </View>
            </View>
            <Button 
            mode='contained'
             labelStyle={{fontSize: 18, fontFamily: 'ProximaNova-Bold', }} 
             style={{backgroundColor: '#002F72',padding:5}}
             onPress={()=> navigation.navigate('Success')}
             >confirm</Button>
        </View>
    )
}

export default PaymentScreen;
