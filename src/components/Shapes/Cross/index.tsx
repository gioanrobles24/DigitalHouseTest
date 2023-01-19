import * as React from 'react';
import {View, StyleSheet} from 'react-native';

export const CrossShape = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossUp} />
      <View style={styles.crossFlat} />
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    left: 8,
  },
  crossUp: {
    backgroundColor: 'red',
    height: 10,
    width: 2,
  },
  crossFlat: {
    backgroundColor: 'red',
    height: 2,
    width: 10,
    position: 'absolute',
    left: -4,
    top: 4,
  },
});
