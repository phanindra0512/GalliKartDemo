import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card, Button, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const cateogriesList = [
    {
      src: require('../../assets/Dal.png'),
      itemName: 'Dal',
      itemQty: '1kg',
      itemPrice: '50',
    },
    {
      src: require('../../assets/Sugar.png'),
      itemName: 'Sugar',
      itemQty: '5kg',
      itemPrice: '120',
    },
    {
      src: require('../../assets/Tamarind.png'),
      itemName: 'Tamarind',
      itemQty: '500g',
      itemPrice: '100',
    },
    {
      src: require('../../assets/ChillyPowder.png'),
      itemName: 'Chilli Powder',
      itemQty: '500g',
      itemPrice: '80',
    },
    {
      src: require('../../assets/Aata.jpg'),
      itemName: 'Aashirvaad Atta',
      itemQty: '1kg',
      itemPrice: '60',
    },
    {
      src: require('../../assets/Milk.jpg'),
      itemName: 'Heritage Milk',
      itemQty: '1ltr',
      itemPrice: '30',
    },
  ];
function GroceriesList() {
    const [isQunatity, setIsQuantity] = useState(0);

  const incrementQuantity = () => {
    setIsQuantity(isQunatity + 1);
  };
  const decrementQuantity = (qty) => {
    if (qty) {
      setIsQuantity(isQunatity - 1);
    }
  };
    return (
        <View style={{flex:1}}>
 <View style={{flex: 1}}>
          <ScrollView>     
     {
         cateogriesList.map((item, index) => {
    return (
        <View
          style={{
            flex: 1,
            flexDirection:'row',
            justifyContent: 'space-evenly',paddingBottom:10
          }}>
          <Card style={{flex: 0.45,height:210,borderColor:'grey',borderWidth:1}} key={index}>
           <View style={{flex:1,paddingTop:10}}>
           <Image
              source={item.src}
              style={{width:140,height:100, alignSelf: 'center',borderRadius:5}}
            />
           </View>
           <View style={{flex:0.2,alignItems:'flex-start',paddingLeft:15,paddingTop:40}}>
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>{item.itemName} </Text>

           </View>
            <View style={{flex: 1,paddingTop:10,paddingLeft:10}}>
                <View style={{flex:1,}}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',paddingLeft:5
                }}>
                <View style={{flex:0.4}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>Qty</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
            <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>{item.itemQty}</Text>
                </View>          
                    </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',paddingLeft:5,paddingTop:7
                }}>
                <View style={{flex:0.4}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center', }}>Price</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
            <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>{item.itemPrice}</Text>
                </View>
              </View>
              </View>
              <View style={{flex:1,paddingLeft:30,alignSelf:'flex-end'}}>
              <View
                style={{
                    flex:1,
                  flexDirection: 'row',
                  justifyContent:'center',alignSelf:'center',paddingTop:10,paddingBottom:5
                  
                }}>
               
                    <View style={{flex:0.29,justifyContent:'center',alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => decrementQuantity(isQunatity)}>
                    <Feather name="minus-circle" size={27} color="#870000" />
</TouchableOpacity>
                    </View>
                
                <View style={{flex:0.19,justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize: 18, fontFamily: 'ProximaNova-Bold'}}>
                  {isQunatity}
                </Text>
                </View>
                
                    <View style={{flex:0.4,justifyContent:'center',alignSelf:'center'}}>
                    <TouchableOpacity onPress={incrementQuantity}>
                    <Icon name="ios-add-circle-outline" size={30} color="green" />
</TouchableOpacity>
                    </View>
            
              </View>
              </View>
            </View>
          </Card>
          <Card style={{flex: 0.45,height:210,borderColor:'grey',borderWidth:1}}>
           <View style={{flex:1,paddingTop:10}}>
           <Image
              source={require('../../assets/Dal.png')}
              style={{width:140,height:100, alignSelf: 'center',borderRadius:5}}
            />
           </View>
           <View style={{flex:0.2,alignItems:'flex-start',paddingLeft:15,paddingTop:40}}>
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>Dal </Text>

           </View>
            <View style={{flex: 1,paddingTop:10,paddingLeft:10}}>
                <View style={{flex:1,}}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',paddingLeft:5
                }}>
                <View style={{flex:0.4}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>Qty</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>20Kg</Text>
                </View>          
                    </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',paddingLeft:5,paddingTop:7
                }}>
                <View style={{flex:0.4}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center', }}>Price</Text>
                </View>
                <View style={{flex:0.2}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold',justifyContent:'center',alignSelf:'center' }}>:</Text>
                </View>            
                <View style={{flex:0.7}}>
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>20</Text>
                </View>
              </View>
              </View>
              <View style={{flex:1,paddingLeft:30,alignSelf:'flex-end'}}>
              <View
                style={{
                    flex:1,
                  flexDirection: 'row',
                  justifyContent:'center',alignSelf:'center',paddingTop:10,paddingBottom:5
                  
                }}>
               
                    <View style={{flex:0.29,justifyContent:'center',alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => decrementQuantity(isQunatity)}>
                    <Feather name="minus-circle" size={27} color="#870000" />
</TouchableOpacity>
                    </View>
                
                <View style={{flex:0.19,justifyContent:'center',alignSelf:'center'}}>
                <Text style={{fontSize: 18, fontFamily: 'ProximaNova-Bold'}}>
                  {isQunatity}
                </Text>
                </View>
                
                    <View style={{flex:0.4,justifyContent:'center',alignSelf:'center'}}>
                    <TouchableOpacity onPress={incrementQuantity}>
                    <Icon name="ios-add-circle-outline" size={30} color="green" />
</TouchableOpacity>
                    </View>
            
              </View>
              </View>
            </View>
          </Card>
         
         
        </View>
          )
        })}
        </ScrollView>
      </View>
      
        </View>
    )
}

export default GroceriesList
