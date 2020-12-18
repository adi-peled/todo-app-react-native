import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, pressHandler }) {



    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)} >

            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color='#333' />
            </View>
        </TouchableOpacity >
    )
}



const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#4b944b',
        marginTop: 20,
        borderStyle: 'dashed',
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        minWidth: 100
    }
})