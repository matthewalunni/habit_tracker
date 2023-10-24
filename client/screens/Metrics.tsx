import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Graph from '../components/Graph.comp';

const Metrics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Graph />
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

export default Metrics;
