import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import Icon from "react-native-vector-icons/Feather";
import { NavigationContainer, useNavigation, DrawerActions } from "@react-navigation/native";

function HeaderComponent(props) {
    const navigation = useNavigation();
    return (
        <View>
            <Header
                barStyle="light-content"
                placement="center"

                leftComponent={() => (
                    // <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Icon
                            size={props.size}
                            name={props.name}
                            color="#fff"
                            style={{ marginLeft: 5 }}
                        />
                    </TouchableOpacity>
                )}
                containerStyle={{ backgroundColor: '#002F72', height: 80, }}
                centerComponent={() => (
                    <Text style={{ color: "#fff", fontSize: 20, fontFamily: 'ProximaNova-Bold', }}>{props.title}</Text>
                )}
            >
            </Header>
        </View>
    )
}

export default HeaderComponent
