import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <View style={styles.view}>
            <TouchableOpacity>
                <Icon name="home" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="newspaper" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.circleView}>
                    <Icon name="apps" size={25} color="white"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="vote" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="lightbulb-outline" size={25}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    circleView: {
        // Attributes for inner circle
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        backgroundColor: '#FF9800',
        // Attributes for outer circle
        borderWidth: 3,
        borderColor: '#FFFFFF',
        // This is what pushes it about the top
        marginBottom: 25,
        // Aligning the icon
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // Adding the shadow at the bottom
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: .1,
        shadowRadius: 3
    }
});

export default RailTabBar;