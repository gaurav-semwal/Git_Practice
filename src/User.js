/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const User = forwardRef((props, ref) => {
  return (
    <View>
      <TextInput ref={ref} style={Styles.user} />
    </View>
  );
});
const Styles = StyleSheet.create({
  user: {borderColor: 'black'},
});
export default forwardRef(User);
