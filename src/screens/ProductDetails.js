import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card, Button, Subheading} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderComponent from '../components/HeaderComponent'

function ProductDetails({navigation, props}) {
   
    return (
        <View style={{flex:1}}>
                        <HeaderComponent title="Product Details" name="arrow-left" size={23} {...props} />

            <View style={{flex:0.4,flexDirection:'row',paddingTop:10}}>
           <View style={{flex:0.7,alignItems:'center'}}>
        <Image source={require('../../assets/Dal.png')} style={{width:120,height:120}}/>
           </View>
<View style={{flex:0.5,alignItems:'center'}}>
        
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold',paddingTop:10,alignSelf:'flex-start' }}>Dal </Text>

           
             
              <View
                style={{
                  
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex:0.6}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>Qty</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
                 <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>2Kg</Text>
                </View>          
                    </View>
              <View
                style={{
                  
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex:0.6}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center', }}>Price</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
            <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>20</Text>
                </View>
              </View>
              <View
                style={{
                  
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex:0.6}}>
                <Text  style={{ fontSize: 15, color: '#ccc', fontFamily: 'ProximaNova-Bold',justifyContent:'center', }}>Discount</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#ccc', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
            <Text  style={{ fontSize: 15, color: '#ccc', fontFamily: 'ProximaNova-Bold', }}>10%</Text>
                </View>
              </View>
              <Button mode='contained' style={{marginTop:10}}>Add</Button>
</View>

</View>
<View style={{flex:1}}>
<Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold',alignSelf:'flex-start',paddingLeft:20}}>Description :</Text>
<Text style={{  color: '#ccc', fontFamily: 'ProximaNova-Bold',paddingLeft:20,alignSelf:'flex-start',paddingTop:5}}>This Product is Good</Text>
</View>
<View style={{flex:0.2,justifyContent:'center',alignSelf:'flex-end',paddingRight:50}}>
                    <TouchableOpacity onPress={() => console.log('cart')}>
                    <FontAwesome5 name="shopping-cart" size={27} color="white" style={{backgroundColor:'#002F72',width:50,height:50,borderRadius:50,justifyContent:'center',paddingTop:10,paddingLeft:8}}/>
</TouchableOpacity>
                    </View>
        </View>
    )
}

export default ProductDetails
