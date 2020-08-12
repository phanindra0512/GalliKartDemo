import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Avatar } from 'react-native-elements';
import { Title, Caption, Divider, Drawer, Button } from 'react-native-paper';

function CustomDrawer(props) {

    return (
        <View style={{ flex: 1, paddingTop: 30, }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20, }}>
                        <Avatar
                            rounded
                            size={60}
                            source={{
                                uri:
                                    'https://successroute.ca/img/default.png',
                            }}
                            showEditButton
                            onPress={() => console.log("Works!")}
                            containerStyle={{ marginLeft: 15 }}
                        />
                        <View style={{ flex: 1.1, marginLeft: 20, justifyContent: 'center', }}>
                            <Title style={{ color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>Sai phanindra</Title>
                            <Caption style={{ color: '#002F72', fontFamily: 'ProximaNova-Bold', marginTop: -5 }}>9505876290</Caption>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#002F72' }} />
                    <Drawer.Section style={{ marginTop: 15 }} >
                        <DrawerItem
                            icon={({ focused, color, size }) => (
                                <Icon name="home-outline" color="#002F72" size={25} />
                            )}
                            label="Home"
                            labelStyle={{ color: '#002F72', fontFamily: 'ProximaNova-Bold', fontSize: 18 }}

                            onPress={() => { props.navigation.navigate('Dashboard') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="comment-text-outline" color="#002F72" size={size} />
                            )}
                            label="My orders"
                            labelStyle={{ fontSize: 18, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}
                            onPress={() => { props.navigation.navigate('MyOrders') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="settings" color="#002F72" size={size} />
                            )}
                            label="ProfileSettings"
                            labelStyle={{ fontSize: 18, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}
                            onPress={() => { props.navigation.navigate('ProfileSettings') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialIcons name="notifications-active" color="#002F72" size={size} />
                            )}
                            label="Notifications"
                            labelStyle={{ fontSize: 18, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}
                            onPress={() => { props.navigation.navigate('Notifications') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="star" color="#002F72" size={size} />
                            )}
                            label="Rateus"
                            labelStyle={{ fontSize: 18, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}
                            onPress={() => { props.navigation.navigate('Rateus') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="note-text-outline" color="#002F72" size={size} />
                            )}
                            label="Terms & Conditions"
                            labelStyle={{ fontSize: 17, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}
                            onPress={() => { props.navigation.navigate('TermsAndConditions') }}
                        />
                        {/* <Button
                            contentStyle={{ marginTop: 10, }}
                            labelStyle={{ color: '#002F72' }}
                        >Logout</Button> */}

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="power-standby" color="#002F72" size={size} />
                            )}
                            label="Logout"
                            labelStyle={{ fontSize: 18, color: '#002F72', fontFamily: 'ProximaNova-Bold' }}
                            onPress={() => { props.navigation.navigate('Login') }}
                        />

                    </Drawer.Section>
                    <Text style={{ textAlign: 'center', fontFamily: 'ProximaNova-Bold', fontSize: 17, paddingTop: 10, color: '#ccc', letterSpacing: 1.5 }}>Gallikart</Text>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer
