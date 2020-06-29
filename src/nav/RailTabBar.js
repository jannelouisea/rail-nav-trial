import React, { useRef } from 'react';
import {View, Text, TouchableOpacity, StyleSheet,SafeAreaView} from 'react-native';
import { MAIN_ROUTES, SECONDARY_ROUTES } from '../constants/ScreenMapping';
import RBSheet from "react-native-raw-bottom-sheet";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* Icons */
import Home from '../assets/svg/home.svgx';
import Apps from '../assets/svg/apps.svgx';
import Profile from '../assets/svg/account_circle.svgx';
import Community from '../assets/svg/supervised_user_circle.svgx';
import Officials from '../assets/svg/assignment_ind.svgx';
import Notifications from '../assets/svg/notifications.svgx';
import Settings from '../assets/svg/settings.svgx';
import Info from '../assets/svg/info.svgx';

const RailTabBar = ({state, descriptors, navigation}) => {
    const secondaryNavRef = useRef();

    return (
        <SafeAreaView style={styles.view}>
            <TouchableOpacity style={styles.navButtons} onPress={() => {navigation.navigate(MAIN_ROUTES.HOME)}}>
                <Home size={25}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.navButtons} onPress={() => {navigation.navigate(MAIN_ROUTES.NEWS)}}>
                <Icon name="newspaper" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.navButtons} activeOpacity={.8} onPress={() => {secondaryNavRef.current.open()}}>
                <View style={styles.circleView}>
                    <Apps size={25} fill="#FFFFFF"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.navButtons} onPress={() => {navigation.navigate(MAIN_ROUTES.BILLS)}}>
                <Icon name="vote" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.navButtons} onPress={() => {navigation.navigate(MAIN_ROUTES.PROPOSALS)}}>
                <Icon name="lightbulb-outline" size={25}/>
            </TouchableOpacity>

            <RBSheet 
                ref={secondaryNavRef}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        backgroundColor: "#102027",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }
                }}
            >
                <View style={styles.secondaryNavView}>
                    <View style={styles.secondaryNavRow}>
                        <TouchableOpacity style={styles.secondaryNavButton}
                            onPress={() => {
                                navigation.navigate("Blank", {screenName: "Profile"});
                                secondaryNavRef.current.close();
                            }}
                        >
                            <View style={{padding: 5, borderColor: '#62727B', borderWidth: 1, borderRadius: 20}}>
                                <Profile fill="#FFFFFF"/>
                            </View>
                            <Text style={{color: "#FFFFFF", paddingTop: 6}}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryNavButton}
                            onPress={() => {
                                navigation.navigate("Blank", {screenName: "Community"});
                                secondaryNavRef.current.close();
                            }}
                        >
                            <View style={{padding: 5, borderColor: '#62727B', borderWidth: 1, borderRadius: 20}}>
                                <Community fill="#FFFFFF"/>
                            </View>
                            <Text style={{color: "#FFFFFF", paddingTop: 6}}>Community</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryNavButton}
                            onPress={() => {
                                navigation.navigate("Blank", {screenName: "Officials"});
                                secondaryNavRef.current.close();
                            }}
                        >
                            <View style={{padding: 5, borderColor: '#62727B', borderWidth: 1, borderRadius: 20}}>
                                <Officials fill="#FFFFFF"/>
                            </View>
                            <Text style={{color: "#FFFFFF", paddingTop: 6}}>Officials</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secondaryNavRow}>
                        <TouchableOpacity style={styles.secondaryNavButton}
                            onPress={() => {
                                navigation.navigate("Blank", {screenName: "Notifications"});
                                secondaryNavRef.current.close();
                            }}
                        >
                            <View style={{padding: 5, borderColor: '#62727B', borderWidth: 1, borderRadius: 20}}>
                                <Notifications fill="#FFFFFF" />
                            </View>
                            <Text style={{color: "#FFFFFF", paddingTop: 6}}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryNavButton}
                            onPress={() => {
                                navigation.navigate("Blank", {screenName: "Settings"});
                                secondaryNavRef.current.close();
                            }}
                        >
                            <View style={{padding: 5, borderColor: '#62727B', borderWidth: 1, borderRadius: 20}}>
                                <Settings fill="#FFFFFF" />
                            </View>
                            <Text style={{color: "#FFFFFF", paddingTop: 6}}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryNavButton}
                            onPress={() => {
                                navigation.navigate("Blank", {screenName: "Info"});
                                secondaryNavRef.current.close();
                            }}
                        >
                            <View style={{padding: 5, borderColor: '#62727B', borderWidth: 1, borderRadius: 20}}>
                                <Info fill="#FFFFFF" />
                            </View>
                            <Text style={{color: "#FFFFFF", paddingTop: 6}}>Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',  // center vertically
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
    },
    // Making each nav button extends to it's fullest length
    navButtons: {
        flex: 1,
        alignItems: 'center' // center horizontally in the touchableOpacity button
    },
    secondaryNavView: {
        //borderWidth: 1,
        //borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 200
    },
    secondaryNavRow: {
        //borderWidth: 1,
        //borderColor: 'red',
        flexDirection: 'row',
    },
    secondaryNavButton: {
        alignItems: 'center',
        padding: 20
    }
});

export default RailTabBar;