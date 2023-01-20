import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DateTime} from 'luxon';

import {styles} from './styles';
import {CustomButton} from '@components/Button';
import {Product} from '@models/products';

export const ProductDetailScreen = ({route}: {route: any}) => {
  const product: Product = route.params?.product;
  console.log('prod', product);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bienvenido de vuelta!</Text>
      </View>
      <View style={styles.prodInfoContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: product.image,
            }}
          />
        </View>
        <Text style={styles.text1}>Detalles del producto:</Text>
        <Text style={styles.text2}>
          Comprado el:{' '}
          {DateTime.fromISO(product.createdAt).toFormat('dd LLLL, yyyy')}
        </Text>
        <Text style={styles.text3}>Con esta compra acumulaste:</Text>
        <Text style={styles.text4}>{product.points} puntos</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton
            onPressAction={() => navigation.goBack()}
            style={styles.buttonPrimary}
            text={'Aceptar'}
          />
        </View>
      </View>
    </View>
  );
};
