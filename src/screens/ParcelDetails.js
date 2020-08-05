import React, {useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function ParcelDetails({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/bgImage.jpeg')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center',}}>
        <View style={{flex: 0.9, justifyContent: 'center',backgroundColor: '#fff', marginHorizontal: 10, elevation: 10, borderRadius: 5,borderColor:'grey',borderWidth:1 }}>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10,paddingTop:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              Name
            </Text>

            <Input
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,
                height:40,
                alignSelf:'flex-end',
                marginRight:40
                
              }}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              Mobile
            </Text>

            <Input
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,
                alignSelf:'flex-end',
                marginRight:45,
                height:40
              }}
              keyboardType='number-pad'
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              Item Name
            </Text>

            <Input
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,
                alignSelf:'flex-end',
                marginRight:75,
                height:40
              }}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              House-No
            </Text>

            <Input
            keyboardType='number-pad'
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,alignSelf:'flex-end',
                marginRight:68,
               
                height:40
              }}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              Street
            </Text>

            <Input
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,alignSelf:'flex-end',
                marginRight:40,
                
                height:40
              }}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              Area
            </Text>

            <Input
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,
                alignSelf:'flex-end',
                marginRight:30,
                height:40
              }}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row',alignItems:'center',paddingLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#002F72',
                fontFamily: 'ProximaNova-Bold',
                paddingBottom:30
              }}>
              Pin Code
            </Text>

            <Input
            keyboardType='number-pad'
              inputContainerStyle={{
                borderColor: 'grey',
                borderWidth: 1,
                width: 230,
                alignSelf:'flex-end',
                marginRight:60,
                height:40
              }}
            />
          </View>
          <View style={{flex:1}}>
              <Button
              title='Submit'
            buttonStyle={{width:200,alignSelf:'center',backgroundColor:'#002F72'}}
              />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ParcelDetails;
