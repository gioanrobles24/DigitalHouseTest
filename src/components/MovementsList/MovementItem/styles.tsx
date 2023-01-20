import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 13,
  },
  tinyLogo: {
    width: '20%',
    height: '100%',
    borderRadius: 10,
  },
  productName: {
    fontWeight: '800',
    lineHeight: 19,
    fontSize: 14,
    color: Colors.black,
  },
  productPoints: {
    fontWeight: '800',
    lineHeight: 19,
    fontSize: 14,
    color: Colors.black,
  },
  productDate: {
    fontWeight: '400',
    lineHeight: 16,
    fontSize: 12,
    color: Colors.black,
    marginTop: 7,
  },
  productInfo: {
    marginLeft: 11,
    width: '45%',
    maxWidth: '45%',
  },
  productInfoTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '33%',
    maxWidth: '33%',
  },
  redLine: {
    height: 2,
    width: 10,
    left: 8,
    backgroundColor: '#FF0000',
  },
  arrowStyle: {
    width: 12,
    height: 12,
  },
});
