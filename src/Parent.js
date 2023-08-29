/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const inputRef = useRef(1);

  const updateInput = () => {
    inputRef.current.setNativeProps({
      text: 'APPINVENTORS',
      style: {color: 'green'},
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: '#f0f0f0'}]}>
      <Text>Using forwardRef</Text>
      <TextInput ref={inputRef} style={styles.input} />
      <Button title="Update Input Box" onPress={updateInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 350,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default App;
