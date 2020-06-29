import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlankScreen = ({route}) => {
    const {screenName} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is the {screenName} screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default BlankScreen;