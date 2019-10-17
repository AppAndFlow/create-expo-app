import React from 'react';
import { Text, TextProps } from 'react-native-kondo';

const Heading = (props: TextProps) => (
  <Text fontSize={3} color="black" {...props} />
);

export default Heading;
