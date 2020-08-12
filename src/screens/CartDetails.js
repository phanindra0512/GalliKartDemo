import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Divider, Button } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CartItems from '../components/CartItems'
import { BarIndicator } from 'react-native-indicators'

function CartDetails({ navigation }) {

    const [isQuantity, setIsQuantity] = useState(0)
    const [isAnimating, setIsAnimating] = useState(true)

    const closeIndicator = () => {
        setTimeout(() => {
            setIsAnimating(false)
        }, 2000)
    }
    useEffect(() => {
        closeIndicator()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <View style={{ flex: 1, marginHorizontal: 10, marginTop: 10, }}>
                <View style={{ flex: 0.2, backgroundColor: '#002F72', borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>
                    <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'flex-end', paddingTop: 10 }}>
                        <Text style={{ flex: 0.7, fontFamily: 'ProximaNova-Bold', fontSize: 20, paddingLeft: 10, color: '#fff' }}>Delivery Address</Text>
                        <Text style={{ flex: 0.4, textAlign: 'right', paddingRight: 10, fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#DC3545' }}>CHANGE</Text>
                    </View>
                    <Text style={{ fontSize: 17, fontFamily: 'ProximaNova-Bold', paddingHorizontal: 10, paddingTop: 5, color: '#fff' }}>Ramachandar Rao Peta,Chintha chettu center</Text>
                </View>

                <View style={{ flex: 0.7, backgroundColor: '#fff' }}>
                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 20, paddingTop: 10, paddingLeft: 10, paddingBottom: 10, color: '#002F72' }}>Your Cart</Text>
                    <Divider style={{ backgroundColor: '#888' }} />
                    <ScrollView>
                        {
                            isAnimating ?
                                (
                                    <View
                                        style={{ flex: 1, justifyContent: "center", alignSelf: "center", }}
                                    >
                                        <BarIndicator animating={true} color='#002F72' />
                                    </View>
                                ) :
                                (
                                    <View>
                                        <CartItems />
                                        <CartItems />
                                        <CartItems />
                                        <CartItems />
                                        <CartItems />
                                        <CartItems />
                                    </View>
                                )
                        }

                    </ScrollView>
                </View>
                <View style={{ flex: 0.2, backgroundColor: '#fff', paddingVertical: 10 }}>
                    <View style={{ flex: 0.4, flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Subtotal</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>{'\u20B9'} 150</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.4, flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#888' }}>Delivery charges</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#888' }}>{'\u20B9'} 50</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#000' }} />
                    <View style={{ flex: 0.4, flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Total</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>{'\u20B9'} 200</Text>
                        </View>
                    </View>
                </View>

                <Button style={{ backgroundColor: '#002F72', marginBottom: 5 }} labelStyle={{ color: '#fff', fontSize: 15 }} onPress={() => navigation.navigate('ChooseVendor')}>PROCEED</Button>

            </View>
        </View>
    )
}

export default CartDetails
