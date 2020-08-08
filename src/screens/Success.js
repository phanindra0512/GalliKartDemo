import React from 'react'
import {View ,Text, Image} from 'react-native';
import {Button} from 'react-native-paper';

function Success({navigation}) {
    return (
       <View style={{flex:1,alignItems:'center',backgroundColor:'#fff'}}>
           <Image  source={require('../../assets/Checkmark.gif')} style={{width:150,height:150,borderRadius:100,marginTop:50}}/>
           <Text style={{fontSize: 20, fontFamily: 'ProximaNova-Bold',color:'#002F72'}}>Order Placed Successfully</Text>
           <View style={{flex:0.9,alignItems:'center'}}>
               <View style={{flex:0.8}}>
               <Image  source={require('../../assets/emoji.png')} style={{width:150,height:170,marginTop:40}}/>

               </View>
           <Image  source={require('../../assets/TQuu.png')} style={{width:200,height:70,marginTop:221,position:'absolute'}}/>
</View>
        <Button mode='contained'
        labelStyle={{fontSize: 18, fontFamily: 'ProximaNova-Bold', }} 
        style={{backgroundColor: '#002F72',padding:5}}
        onPress={()=> navigation.navigate('Dashboard')}
        >
            Home
            </Button> 
        
        
       </View>
    )
}

export default Success
