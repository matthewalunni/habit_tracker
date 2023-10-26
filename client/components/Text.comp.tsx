import {StyleSheet, TextProps, Text as RNText} from 'react-native';
import React from 'react';
import {color} from '../theme';

const Text = (props: TextProps) => {
  const {children, style} = props;
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: color.primary,
  },
});

export default Text;
