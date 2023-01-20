import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {percentageToDP} from '@utils/screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Colors.backgroundPrimary',
  },
  welcomeContainer: {
    backgroundColor: Colors.backgroundSecondary,
    flexDirection: 'row',
    paddingTop: '20%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  welcomeText: {
    color: Colors.primaryText,
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 27,
  },
  prodInfoContainer: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    height: percentageToDP('90%'),
    borderRadius: 30,
    shadowOffset: {width: -4, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 20,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    width: percentageToDP('90%'),
    height: percentageToDP('13%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text1: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
    marginTop: 32,
  },
  text2: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.black,
    marginTop: 19,
  },
  text3: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    color: '#9B9898',
    marginTop: 19,
  },
  text4: {
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32,
    color: Colors.black,
    marginTop: 32,
  },
});
