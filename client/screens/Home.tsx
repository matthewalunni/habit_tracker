import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ProgressBar from '../components/ProgressBar.comp';
import {color, padding} from '../theme';
import {Habit} from '../types/Habit';
import {auth, db} from '../firebase/firebase-config';
import {doc, getDoc} from 'firebase/firestore';
import Text from '../components/Text.comp';

const Home = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const userRef = doc(db, 'users', auth.currentUser!.uid);

  const onIncrement = () => {};

  const onDecrement = () => {};

  useEffect(() => {
    getDoc(userRef)
      .then(user => {
        setHabits(user.data()?.habits);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  }, [userRef]);

  return (
    <View style={styles.container}>
      <Text style={{padding: padding.sm}}>Home</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {habits.map((habit, index) => (
        <ProgressBar
          key={index}
          habitName={habit.name || 'habit'}
          bgColor={habit.bgColor || '#219ebc'}
          progress={habit.completed / habit.frequency}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.md,
    backgroundColor: color.background,
  },
});

export default Home;
