
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'green',
        paddingTop:10,
        paddingBottom:10,
    },
    title: {
        textAlign: 'center',
        color: 'lightgray',
        fontSize: 22
    }
})
