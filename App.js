import React from 'react';
import {StyleSheet, View} from 'react-native';
import ParentComponent from './src/Parent';

const App = () => {
  return (
    <View style={Styles.container}>
      <ParentComponent />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
