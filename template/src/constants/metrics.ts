import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const createHitSlop = (size: number) => ({
  top: size,
  right: size,
  bottom: size,
  left: size,
});
const createCircle = (diameter: number) => ({
  height: diameter,
  width: diameter,
  borderRadius: diameter / 2,
});

export default {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isIphoneX:
    Platform.OS === 'ios' && (windowHeight === 812 || windowHeight === 896),
  isSmallDevice: windowWidth < 375,
  createCircle,
  createHitSlop,
  statusBarHeight: Constants.statusBarHeight,
  windowHeight,
  windowWidth,
};
