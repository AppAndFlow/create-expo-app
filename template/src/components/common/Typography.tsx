import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

import colors from '../../constants/colors';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const TextSmall = ({ children, style, ...props }: Props & TextProps) => (
  <Text style={[styles.small, style]} {...props}>
    {children}
  </Text>
);

const TextNormal = ({ children, style, ...props }: Props & TextProps) => (
  <Text style={[styles.normal, style]} {...props}>
    {children}
  </Text>
);

const TextLarge = ({ children, style, ...props }: Props & TextProps) => (
  <Text style={[styles.large, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  small: {
    color: colors.black,
    fontSize: 14,
  },
  normal: {
    color: colors.black,
    fontSize: 16,
  },
  large: {
    color: colors.black,
    fontSize: 18,
  },
});

export { TextSmall, TextNormal, TextLarge };
