
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HotelHome } from './src/screen';
import { HotelDetails } from './src/screen';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App= () => {
  return (
  //  <HotelDetails/>
  <HotelHome/>
  );
};

const styles = StyleSheet.create({
})
export default App;
