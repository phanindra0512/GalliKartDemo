import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card, Button, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const cateogriesList = [
    {
      src: require('../../assets/Dal.png'),
      itemName: 'Dal',
    },
    {
      src: require('../../assets/Sugar.png'),
      itemName: 'Sugar',
      
    },
    {
      src: require('../../assets/Tamarind.png'),
      itemName: 'Tamarind',
    },
    {
      src: require('../../assets/ChillyPowder.png'),
      itemName: 'Chilli Powder',
    },
    {
      src: require('../../assets/Aata.jpg'),
      itemName: 'Aashirvaad Atta',
      
    },
    {
      src: require('../../assets/Milk.jpg'),
      itemName: 'Heritage Milk',
      
    },
  ];

  const cateogriesList2 = [
    {
      image: require('../../assets/fortune.jpg'),
      productName: 'Fortune Oil',
    },
    {
      image: require('../../assets/dairymilk.png'),
      productName: 'Dairy Milk',
      
    },
    {
      image: require('../../assets/cleanol-sapic.jpeg'),
      productName: 'Sapic Cleanol',
    },
    {
      image: require('../../assets/boost.jpg'),
      productName: 'Boost',
    },
    {
      image: require('../../assets/harpic.jpg'),
      productName: 'Harpic',
      
    },
    {
      image: require('../../assets/onions.png'),
      productName: 'Onions',
      
    },
  ];
function GroceriesList({navigation}) {
   
    return (
        <View style={{flex:1}}>
    
          <ScrollView> 
             <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
              <View style={{flex:0.45,justifyContent:'space-evenly'}} >
              {
         cateogriesList.map((item, index) => {
    return (
        <View
          style={{
            flex: 1,
            paddingBottom:10,
          }}>
          <Card style={{flex: 0.45,borderColor:'grey',borderWidth:1,}} key={index} >
           <View style={{flex:1,alignSelf:'center',justifyContent:'center',paddingTop:5,paddingBottom:5}}>
           <Image
              source={item.src}
              style={{width:120,height:120, alignSelf: 'center',borderRadius:5}}
              
            />
           </View>
           <View style={{flex:1,paddingLeft:10,paddingBottom:10}}>
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold', alignSelf:'center'}}>{item.itemName} </Text>

           </View>
           
          </Card>
          </View>
          )
        })}
        
              </View>
              <View style={{flex:0.45,justifyContent:'space-evenly'}}>
              {
         cateogriesList2.map((item2, index2) => {
    return (
      <View style={{flex:1,paddingBottom:10}}>
          <Card style={{flex: 0.45,borderColor:'grey',borderWidth:1}} key={index2}>
           <View style={{flex:1,alignSelf:'center',justifyContent:'center',paddingTop:5,paddingBottom:5}}>
           <Image
              source={item2.image}
              style={{width:120,height:120, alignSelf: 'center',borderRadius:5}}
            />
           </View>
           <View style={{flex:1,paddingLeft:10,paddingBottom:10}}>
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold', alignSelf:'center'}}>{item2.productName} </Text>

           </View>
           
          </Card>
          </View>
          )
        })}
              </View>
             </View>
   
         
        
         
        </ScrollView>
      </View>
      
        
    )
}

export default GroceriesList
