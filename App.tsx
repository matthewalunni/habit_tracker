import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AddHabitStack from './navigation/AddHabitStack';

const App = () => {
  return (
    <NavigationContainer>
      <AddHabitStack />
    </NavigationContainer>
  );
};

export default App;
