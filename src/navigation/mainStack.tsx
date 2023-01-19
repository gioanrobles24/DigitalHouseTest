import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import {HomeScreen} from '@screens/Home';
import {ProductDetailScreen} from '@screens/Product/Detail';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export const HeaderOptions = {
  headerShown: false,
};

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{...HeaderOptions}}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen
        name={Routes.ProductDetail}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
