import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {CustomButton} from '@components/Button';
import {MovementsList} from '@components/MovementsList';
import {styles} from './styles';
import {
  getErrorMessage,
  getLoading,
  getTotalPoints,
} from '@store/selectors/productsSelectors';
import {
  filterProductsRequest,
  getProductsRequest,
} from '@store/actions/products/productAction';
import {Colors} from '@constants/colors';
import {filterTypes} from '@store/types/products';

export const HomeScreen = () => {
  const pending = useSelector(getLoading);
  const productsError = useSelector(getErrorMessage);
  const totalPoints = useSelector(getTotalPoints);

  const [filtered, setFiltered] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const filterProductsHandler = (filterType: filterTypes) => {
    setFiltered(!filtered);
    dispatch(filterProductsRequest(filterType));
  };

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
      ) : !productsError ? (
        <View style={styles.MovementsContainer}>
          <MovementsList />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.welcomeText}>
            Algo ocurrio por favor intenta de nuevo!
          </Text>
        </View>
      )}
      <View>
        {filtered ? (
          <CustomButton
            onPressAction={() => filterProductsHandler(filterTypes.default)}
            style={styles.defaultButton}
            text={'Todos'}
          />
        ) : (
          <View style={styles.buttonsContainer}>
            <CustomButton
              onPressAction={() => filterProductsHandler(filterTypes.wined)}
              style={styles.buttonPrimary}
              text={'Ganados'}
            />
            <CustomButton
              onPressAction={() => filterProductsHandler(filterTypes.redeemed)}
              style={styles.buttonPrimary}
              text={'Canjeados'}
            />
          </View>
        )}
      </View>
    </View>
  );
};
