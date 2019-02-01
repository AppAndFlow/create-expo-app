import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const makeHitSlop = (size: number) => ({
  top: size,
  right: size,
  bottom: size,
  left: size,
});
const makeCircle = (diameter: number) => ({
  height: diameter,
  width: diameter,
  borderRadius: diameter / 2,
});

export default {
  width,
  height,
  paddingHorizontal: 30,
  isSmallDevice: width <= 375,
  isIphoneX: height >= 800,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  makeHitSlop,
  makeCircle,
};
