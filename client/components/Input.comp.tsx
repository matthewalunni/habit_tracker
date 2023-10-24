import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export default (props: TextInputProps) => {
  return (
    <>
      <TextInput style={[styles.input, props.style]} {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 0,
    width: '100%',
  },
});
