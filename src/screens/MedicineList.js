import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card, Button, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const medicineList = [
    {
      src: require('../../assets/himalaya-brahmi.jpg'),
      itemName: 'Himalaya-Brahmi',
      
    },
    {
      src: require('../../assets/Iron.jpg'),
      itemName: 'Iron',
     
    },
    {
      src: require('../../assets/m2tone.jpg'),
      itemName: 'M2-Tone',
      
    },
    {
      src: require('../../assets/hydroxychloroquine.jpg'),
      itemName: 'Hydroxyloroquine',
      
    },
    {
      src: require('../../assets/nutricharge-dha200.jpg'),
      itemName: 'Nutricharge - Dhe 200',
      
    },
    {
      src: require('../../assets/paracitmol.png'),
      itemName: 'Paracitmol',
      
    },
  ];

  const medicineList2 = [
    {
      image: require('../../assets/paracitmol.png'),
      productName: 'Paracitmol',
    },
    {
      image: require('../../assets/nutricharge-dha200.jpg'),
      productName: 'Nutricharge - Dhe 200',
      
    },
   
    {
      image: require('../../assets/boost.jpg'),
      productName: 'Boost',
    },
    {
      image: require('../../assets/himalaya-brahmi.jpg'),
      productName: 'Himalaya-brahmi',
      
    },
    {
      image: require('../../assets/m2tone.jpg'),
      productName: 'M2-Tone',
    },
    {
      image: require('../../assets/hydroxychloroquine.jpg'),
      productName: 'Hydroxyloroquine',
      
    },
  ];
  
function MedicineList() {
   
    return (
        <View style={{flex:1}}>
  <ScrollView> 
             <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
              <View style={{flex:0.45,justifyContent:'space-evenly'}} >
              {
         medicineList.map((item, index) => {
    return (
        <View
          style={{
            flex: 1,
            paddingBottom:10,
          }}>
          <Card style={{borderColor:'grey',borderWidth:1,width:150,height:190}} key={index} >
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
         medicineList2.map((item2, index2) => {
    return (
      <View style={{flex:1,paddingBottom:10}}>
          <Card style={{width:150,height:190,borderColor:'grey',borderWidth:1}} key={index2}>
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

export default MedicineList
