import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './styles';
import {MovementsItem} from './MovementItem';

import {getProducts} from '@store/selectors/productsSelectors';

export const MovementsList = () => {
  const products = useSelector(getProducts);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <MovementsItem product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
