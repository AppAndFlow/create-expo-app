import React from 'react';
import { Box, Text } from 'react-native-kondo';

const HomeScreen = () => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Text fontSize={3}>Edit HomeScreen.tsx</Text>
  </Box>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
