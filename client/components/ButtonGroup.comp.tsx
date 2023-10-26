import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {borderRadius, color, margin, padding} from '../theme';
import Text from './Text.comp';

type ButtonGroupProps = {
  buttons: string[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const {selected, setSelected} = props;
  const [selection, setSelection] = useState(selected);
  const {buttons} = props;

  useEffect(() => {
    setSelected(selection);
  }, [selection, setSelected]);

  return (
    <View style={styles.buttonGroup}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selection === index ? {backgroundColor: color.primary} : null,
          ]}
          onPress={() => setSelection(index)}>
          <Text
            style={[
              styles.buttonText,
              selection === index ? {color: color.background} : null,
            ]}>
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: color.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: padding.sm,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.primary,
    borderRadius: borderRadius.lg,
    marginHorizontal: margin.sm / 2,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: padding.md,
  },
});

export default ButtonGroup;
