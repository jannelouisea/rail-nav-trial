import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* Icons */
import Home from '../assets/svg/home.svgx';
import Apps from '../assets/svg/apps.svgx'

const RailTabBar = ({state, descriptors, navigation}) => {
    /*
    console.log("state");
    console.log(state);
    console.log("===============");
    console.log("descriptors");
    console.log(descriptors);
    console.log("===============");
    console.log("navigation");
    console.log(navigation);*/

    return (
        <SafeAreaView style={styles.view}>
            <TouchableOpacity>
                <Home size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="newspaper" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.8}>
                <View style={styles.circleView}>
                    <Apps size={25} fill="#FFFFFF"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="vote" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="lightbulb-outline" size={25}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    circleView: {
        // Attributes for inner circle
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        backgroundColor: '#102027',
        // Attributes for outer circle
        borderWidth: 3,
        borderColor: '#FFFFFF',
        // This is what pushes it about the top
        marginBottom: 25,
        // Aligning the icons
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // Adding the shadow at the bottom
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .1,
        shadowRadius: 3,
    }
});

export default RailTabBar;