import { Dimensions, PixelRatio } from 'react-native';

export const percentageToDP = (percent: string) => {
	const screenWidth = Dimensions.get('window').width;
	const elemWidth = parseFloat(percent);
	return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
