import * as React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './styles';
import {MovementsItem} from './MovementItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 1444,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 1444,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: true,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 1444,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
  },
];

export const MovementsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <MovementsItem product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
