import {Dispatch, ReactNode, SetStateAction} from 'react';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {borderRadius, color, margin, padding} from '../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from './Text.comp';

type NumberPickerProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
  children?: ReactNode;
};

const NumberPicker = (props: NumberPickerProps) => {
  const {children, value, min, max, setValue} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (value > min) {
            setValue(value - 1);
          }
        }}>
        <Icon name="minus" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text>{value}</Text>
        {children}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (value < max) {
            setValue(value + 1);
          }
        }}>
        <Icon name="plus" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    backgroundColor: color.primary,
    borderColor: color.primary,
    padding: padding.md,
    color: color.background,
    borderRadius: borderRadius.lg,
    marginHorizontal: margin.sm / 2,
  },
  icon: {
    color: color.background,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumberPicker;
