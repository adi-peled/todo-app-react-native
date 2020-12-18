import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.sandBox}>
            <Text style={styles.boxOne}> one</Text>
            <Text style={styles.boxTwo}> two</Text>
            <Text style={styles.boxThree}> three</Text>
            <Text style={styles.boxFour}> four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sandBox: {
        paddingTop: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ddd'
    },
    boxOne: {
        backgroundColor: 'red',
        padding: 10
    },
    boxTwo: {
        backgroundColor: 'green',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'yellow',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'blue',
        padding: 10,
    },
});

