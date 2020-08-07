import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FAB } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


function ProductDetails({ navigation, route }) {

    const [isVisible, setIsVisible] = useState(true)
    const [isQuantity, setIsQuantity] = useState(0)

    const incrementQty = () => {
        const value = isQuantity
        setIsQuantity(value + 1)
    }

    const decrementQty = () => {
        if (isQuantity - 1 > -1) {
            const value = isQuantity
            setIsQuantity(value - 1)
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 0.8, flexDirection: 'row' }}>
                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: route.params.prdImage }} style={{ width: 110, height: 110, borderRadius: 50 }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10, }}>
                    <Text style={{ fontSize: 23, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>{route.params.prdName}</Text>
                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 15, paddingLeft: 5, color: '#002F72' }}>Price : {'\u20B9'} {route.params.prdPrice}</Text>
                    <Text style={{ fontSize: 13, color: '#888', fontFamily: 'ProximaNova-Bold', paddingLeft: 5 }}>Discount : {route.params.prdDiscount}</Text>
                    {
                        isVisible ?
                            <TouchableOpacity style={{ backgroundColor: '#002F72', width: 90, height: 30, borderRadius: 5, marginTop: 20, marginLeft: 80 }} onPress={() => setIsVisible(false)}>
                                <Text style={{ textAlign: 'center', paddingTop: 6, fontFamily: 'ProximaNova-Bold', color: '#fff' }}>ADD</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ width: 100, flexDirection: 'row', marginLeft: 80, marginTop: 20, justifyContent: 'space-evenly' }}>
                                <FontAwesome
                                    name="minus-square-o"
                                    size={25}
                                    color='#DC3545'
                                    onPress={() => decrementQty()}
                                />
                                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 17 }}>{isQuantity}</Text>
                                <FontAwesome
                                    name='plus-square-o'
                                    size={25}
                                    color='#28A745'
                                    onPress={() => incrementQty()}
                                />
                            </View>
                    }

                </View>
            </View>
            <View style={{ flex: 1.5, }}>
                <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', paddingHorizontal: 10, paddingVertical: 10 }}>Description :</Text>
                <Text style={{ paddingHorizontal: 10, fontSize: 14, color: '#888', fontFamily: 'ProximaNova-Bold', }}>{route.params.prdDescription}</Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-end', paddingRight: 20 }}>
                <FAB
                    style={{ backgroundColor: '#002F72' }}
                    icon="cart"
                    color="#fff"
                    onPress={() => navigation.navigate('CartDetails')}
                />
            </View>

        </View>
    )
}

export default ProductDetails
