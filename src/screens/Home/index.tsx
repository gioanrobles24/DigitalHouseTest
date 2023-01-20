import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {CustomButton} from '@components/Button';
import {MovementsList} from '@components/MovementsList';
import {styles} from './styles';
import {getLoading, getTotalPoints} from '@store/selectors/productsSelectors';
import {getProductsRequest} from '@store/actions/products/productAction';
import {Colors} from '@constants/colors';

export const HomeScreen = () => {
  const pending = useSelector(getLoading);
  const totalPoints = useSelector(getTotalPoints);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenido de vuelta!</Text>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText}>Ruben Rodriguez</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsContainerText}>TUS PUNTOS</Text>
        </View>
      </View>
      <View style={styles.userPointsCard}>
        <Text style={styles.userPointsMonth}>Diciembre</Text>
        <Text style={styles.userPoints}>{totalPoints} pts</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsContainerText}>TUS MOVIMIENTOS</Text>
      </View>
      {pending ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : (
        <View style={styles.MovementsContainer}>
          <MovementsList />
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <CustomButton style={styles.buttonPrimary} text={'Ganados'} />
        <CustomButton style={styles.buttonPrimary} text={'Canjeados'} />
      </View>
    </View>
  );
};
