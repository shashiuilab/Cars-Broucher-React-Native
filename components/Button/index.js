import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../Button/styles';

const StyledButton = ({
    type,
    content,
    press
}) => {
    const backgroundColor = type === 'primary'? '#000' : '#fff';
    const textColor = type === 'primary'? '#fff' : '#000';
    return (
        <Pressable onPress={press} style={[styles.btn, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.btnText, { color: textColor }]}>{ content }</Text>
        </Pressable>
    );
}

export default StyledButton;
