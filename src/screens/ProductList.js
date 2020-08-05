import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card, Button, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import GroceriesList from './GroceriesList';


function ProductList({navigation}) {
  
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.19,paddingTop:10,paddingBottom:10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Card style={{borderColor:'grey',borderWidth:1}}>
          <Card.Cover
            source={require('../../assets/groceries1.jpg')}
            style={Styles.catImg}
          />
          <Subheading style={Styles.catName}>Groceries</Subheading>
        </Card>

        <Card style={{borderColor:'grey',borderWidth:1}} onPress={()=>navigation.navigate('MedicineList')}>
          <Card.Cover
            source={require('../../assets/doctor2.jpg')}
            style={Styles.catImg}
          />
          <Subheading style={Styles.catName}>Pharmacy</Subheading>
        </Card>

        <Card style={{borderColor:'grey',borderWidth:1}} onPress={()=> navigation.navigate('ParcelDetails')}>
          <Card.Cover
            source={require('../../assets/courier.jpg')}
            style={Styles.catImg}
          />
          <Subheading style={Styles.catName}>Parcel</Subheading>
        </Card>
      </View>
      <GroceriesList/>
     
    </View>
  );
}

const Styles = StyleSheet.create({
  catImg: {
    width: 100,
    height: 60,
  },
  catName: {
    color: '#002F72',
    textAlign: 'center',
    fontFamily: 'ProximaNova-Bold',paddingTop:10
  },
});
export default ProductList;
