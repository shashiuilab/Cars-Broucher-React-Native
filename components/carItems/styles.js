import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    homePageContainer: {
        width: '100%',
        height: height
      },
      titles: {
        marginTop: '30%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: '400',
        letterSpacing: 3
      },
      subTitle: {
        fontSize: 18,
        color: '#4c4c4c'
      },
      backgroundImgStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'contain'
      },
      btnContainer: {
        position: 'absolute',
        bottom: 35,
        padding: 20,
        width: '100%'
    }
});

export default styles;