import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Graph from '../components/Graph';

const data = [
  {date: new Date('2020-01-01').getTime(), value: 10 / 100},
  {date: new Date('2020-01-02').getTime(), value: 20 / 100},
  {date: new Date('2020-01-03').getTime(), value: 40 / 100},
  {date: new Date('2020-01-04').getTime(), value: 30 / 100},
  {date: new Date('2020-01-05').getTime(), value: 80 / 100},
  {date: new Date('2020-01-06').getTime(), value: 90 / 100},
];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Graph {...{data}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
