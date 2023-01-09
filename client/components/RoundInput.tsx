import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import {borderRadius} from '../theme';
import Input from './Input';

export default (props: TextInputProps) => {
  return <Input style={[styles.round, props.style]} {...props} />;
};

const styles = StyleSheet.create({
  round: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: 'tomato',
    padding: 15,
    width: '100%',
  },
});
