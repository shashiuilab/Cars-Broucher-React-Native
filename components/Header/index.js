import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Header/styles';

const Header = ({
    params,
}) => (
    <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Image style={styles.menu} source={require('../../assets/menu.png')} />
    </View>
);

export default Header;
