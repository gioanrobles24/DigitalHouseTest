import { MovementsList } from '@components/MovementsList';
import * as React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const HomeScreen = () => {
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
        <Text style={styles.userPoints}>10,000.00 pts</Text>
      </View>
      <View style={styles.pointsContainer}>
          <Text style={styles.pointsContainerText}>TUS MOVIMIENTOS</Text>
      </View>
      <View style={{ flex: 1}}>
        <MovementsList />
      </View>
    </View>
  );
};
