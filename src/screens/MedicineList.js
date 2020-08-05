import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card, Button, Subheading} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const medicineList = [
    {
      src: require('../../assets/himalaya-brahmi.jpg'),
      itemName: 'Himalaya-Brahmi',
      itemQty: '250ml',
      itemPrice: '50',
    },
    {
      src: require('../../assets/Iron.jpg'),
      itemName: 'Iron',
      itemQty: '150ml',
      itemPrice: '100',
    },
    {
      src: require('../../assets/m2tone.jpg'),
      itemName: 'M2-Tone',
      itemQty: '250ml',
      itemPrice: '120',
    },
    {
      src: require('../../assets/hydroxychloroquine.jpg'),
      itemName: 'Hydroxyloroquine',
      itemQty: '1 sheet',
      itemPrice: '80',
    },
    {
      src: require('../../assets/nutricharge-dha200.jpg'),
      itemName: 'Nutricharge - Dhe 200',
      itemQty: '1 sheet',
      itemPrice: '60',
    },
    {
      src: require('../../assets/paracitmol.png'),
      itemName: 'Paracitmol',
      itemQty: '1 sheet',
      itemPrice: '30',
    },
  ];
  
function MedicineList() {
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
         medicineList.map((item, index) => {
    return (
        <View
          style={{
            flex: 1,
            flexDirection:'row',
            justifyContent: 'space-evenly',paddingBottom:10
          }}>
          <Card style={{flex: 0.45,height:240,borderColor:'grey',borderWidth:1}} key={index}>
           <View style={{flex:1,paddingTop:10}}>
           <Image
              source={item.src}
              style={{width:140,height:100, alignSelf: 'center',borderRadius:5}}
            />
           </View>
           <View style={{flex:1,alignItems:'flex-start',paddingLeft:15,paddingTop:55}}>
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold', marginBottom:5,}}>{item.itemName} </Text>

           </View>
            <View style={{flex: 1,paddingTop:-10,paddingLeft:10}}>
                <View style={{flex:1,paddingBottom:10}}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',paddingLeft:5,
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
                  justifyContent: 'space-between',paddingLeft:5,paddingTop:20,
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
              <View style={{flex:1,paddingLeft:30,alignSelf:'flex-end',marginTop:20,marginBottom:5}}>
              <View
                style={{
                    flex:1,
                  flexDirection: 'row',
                  justifyContent:'center',alignSelf:'center',
                  
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
          <Card style={{flex: 0.45,height:240,borderColor:'grey',borderWidth:1}}>
           <View style={{flex:1,paddingTop:10}}>
           <Image
              source={require('../../assets/redrich.jpg')}
              style={{width:140,height:100, alignSelf: 'center',borderRadius:5}}
            />
           </View>
           <View style={{flex:0.2,alignItems:'flex-start',paddingLeft:15,paddingTop:40}}>
           <Text style={{ fontSize: 19, color: '#002F72', fontFamily: 'ProximaNova-Bold', }}>Redrich </Text>

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
                <Text  style={{ fontSize: 15, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>1 sheet</Text>
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

export default MedicineList
