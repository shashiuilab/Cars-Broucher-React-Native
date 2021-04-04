import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import styles from '../carItems/styles';
import StyledButton from '../Button';

const CarItem = ({
    car
}) => {
    const { model, subTitle, tagline, imageUrl, priceStartsAt } = car;
    return (
    <View style={styles.homePageContainer}>
        <ImageBackground source={imageUrl} 
          style={styles.backgroundImgStyle}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>
            {model}
          </Text>
          <Text style={styles.subTitle}>
              {subTitle} {priceStartsAt}
              { tagline && <Text>{tagline}</Text> }
          </Text>
        </View>
        <View style={styles.btnContainer}>
            <StyledButton type='primary' content={'Custom Order'} press={() => console.warn('Custom order')} />
            <StyledButton type='secondary' content={'Existing Inventory'} press={() => console.warn('Existing Inventory')} />
        </View>
      </View>
);
}

export default CarItem;
