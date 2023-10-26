import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import {borderRadius, color} from '../theme';
import Input from './Input.comp';

const RoundInput = (props: TextInputProps) => {
  return <Input style={[styles.round, props.style]} {...props} />;
};

const styles = StyleSheet.create({
  round: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: color.primary,
    padding: 15,
    width: '100%',
  },
});

export default RoundInput;
