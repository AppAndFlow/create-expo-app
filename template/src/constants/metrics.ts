import { Dimensions, Platform } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const makeHitSlop = (size: number) => ({
  top: size,
  right: size,
  bottom: size,
  left: size,
});
const makeCircle = (size: number) => ({
  height: size,
  width: size,
  borderRadius: size / 2,
});

export default {
  windowWidth,
  windowHeight,
  paddingHorizontal: 30,
  isSmallDevice: windowWidth <= 375,
  isIphoneX: windowHeight >= 800,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  makeHitSlop,
  makeCircle,
};
