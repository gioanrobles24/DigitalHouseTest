import {Platform, StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {percentageToDP} from '@utils/screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundPrimary,
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'android' ? '2%' : '12%',
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
    marginVertical: 20,
  },
  userPoints: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 32,
    lineHeight: 43,
    alignSelf: 'center',
  },
  MovementsContainer: {
    flex: 1,
  },
  buttonsContainer: {},
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    width: percentageToDP('43%'),
    height: percentageToDP('13%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultButton: {
    width: '90%',
    alignSelf: 'center',
    height: percentageToDP('13%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
});
