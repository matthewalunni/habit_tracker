import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressBar from '../components/ProgressBar.comp';
import {padding} from '../theme';

const Home = () => {
  const habits = [
    {
      name: 'Drink Water',
      bgColor: '#219ebc',
      progress: 75,
    },
    {
      name: 'Exercise',
      bgColor: '#b72585',
      progress: 50,
    },
    {
      name: 'Meditate',
      bgColor: '#3a0ca3',
      progress: 25,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{padding: padding.sm}}>Home</Text>
      {habits.map((habit, index) => (
        <ProgressBar
          key={index}
          habitName={habit.name}
          bgColor={habit.bgColor}
          progress={habit.progress}
          onIncrement={() => {}}
          onDecrement={() => {}}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.md,
  },
});

export default Home;
