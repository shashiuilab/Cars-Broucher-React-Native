import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 50,
        zIndex: 101,
        paddingHorizontal: 15
    },
    logo: {
        width: 100,
        height: 25,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});

export default styles;