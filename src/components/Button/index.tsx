import * as React from 'react';

import {Text, TouchableOpacity, ViewStyle, StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

export const CustomButton = ({
  style,
  text,
  onPressAction,
}: {
  style: ViewStyle;
  text: string;
  onPressAction: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPressAction} style={style}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 16,
    color: Colors.white,
  },
});
