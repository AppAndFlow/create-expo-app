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
  headerHeight: 100,
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
  isIphoneX:
    Platform.OS === 'ios' && (windowHeight === 812 || windowHeight === 896),
  isSmallDevice: windowWidth < 375,
  makeCircle,
  makeHitSlop,
  paddingHorizontal: 20,
  tabBarHeight: 60,
  windowHeight,
  windowWidth,
};
