import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AddHabitStack from './navigation/AddHabitStack';
import LoginStack from './navigation/LoginStack';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <AddHabitStack />
      ) : (
        <LoginStack setIsSignedIn={setIsSignedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
