import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import { percentageToDP } from '@utils/screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
    paddingHorizontal: 20,
    paddingVertical: 27,
  },
  welcomeContainer: {
    flexDirection: 'row',
  },
  welcomeText: {
    color: Colors.primaryText,
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 27,
  },
  userNameContainer: {
    flexDirection: 'row',
  },
  userNameText: {
    color: Colors.primaryText,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
  },
  pointsContainer: {
    marginVertical: 25,
  },
  pointsContainerText: {
    color: Colors.secondaryText,
    fontWeight: '800',
    fontSize: 14,
  },
  userPointsCard: {
    width: percentageToDP('75%'),
    height: percentageToDP('36%'),
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignSelf: 'center',
  },
  userPointsMonth: {
    fontWeight: '800',
    fontSize: 16,
    color: Colors.white,
    marginHorizontal: 19,
    marginVertical: 20
  },
  userPoints: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 43,
    alignSelf: 'center'
  },
});
