import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from '../theme';

const DateTimePicker = () => {
  return (
    <View style={styles.row}>
      <ScrollView
        style={styles.clock}
        contentContainerStyle={styles.clockContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
      </ScrollView>
      <ScrollView
        style={styles.clock}
        contentContainerStyle={styles.clockContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
      </ScrollView>
      <ScrollView
        style={styles.clock}
        contentContainerStyle={styles.clockContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
      </ScrollView>
      <ScrollView
        style={styles.clock}
        contentContainerStyle={styles.clockContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text>AM</Text>
        <Text>PM</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.primary,
  },
  clock: {
    width: 50,
    height: 50,
  },
  clockContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DateTimePicker;
