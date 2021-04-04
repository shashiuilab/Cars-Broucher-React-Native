import React from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { carsData } from '../../carsData';
import CarItem from '../carItems';

const { height } = Dimensions.get('window');

const CarsList = ({
    params,
}) => (
    <View style={styles.carsListContainer}>
        <FlatList 
        data={carsData} 
        renderItem={({ item }) => <CarItem car={item} keyExtractor={(item) => item.model.toString()} />} 
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={height}
        showsVerticalScrollIndicator={false}/>
    </View>
);

const styles = StyleSheet.create({
    carsListContainer: {
        width: '100%'
    }
});

export default CarsList;
