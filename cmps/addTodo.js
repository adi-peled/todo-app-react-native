import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('')
    return (
        < View>
            <TextInput
                style={styles.input}
                placeholder='new to do'
                onChangeText={(val) => setText(val)}
            />
            <Button onPress={() => { submitHandler(text) }} title='add new  todo' color='#346434'> </Button>
        </ View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        padding: 15,
        border: 'black 1px solid'
    }


});
