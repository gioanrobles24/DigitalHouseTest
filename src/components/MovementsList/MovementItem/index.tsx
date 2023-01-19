import * as React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {DateTime} from 'luxon';
import {styles} from './styles';
import {CrossShape} from '@components/Shapes/Cross';
import {Product} from '@models/products';

export const MovementsItem = ({product}: {product: Product}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: product.image,
        }}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.product}</Text>
        <Text style={styles.productDate}>
          {DateTime.fromISO(product.createdAt).toFormat('dd LLLL yyyy')}
        </Text>
      </View>
      <View style={styles.productInfoTwo}>
        {!product.is_redemption ? (
          <CrossShape />
        ) : (
          <View style={styles.redLine} />
        )}
        <Text style={styles.productPoints}>{product.points}</Text>
        <Image
          style={styles.arrowStyle}
          source={require('@assets/images/arrow-right.png')}
        />
      </View>
    </TouchableOpacity>
  );
};
