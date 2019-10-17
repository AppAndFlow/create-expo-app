import React from 'react';
import { Box } from 'react-native-kondo';

import Heading from '../common/Heading';

const HomeScreen = () => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Heading>Edit HomeScreen.tsx</Heading>
  </Box>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
