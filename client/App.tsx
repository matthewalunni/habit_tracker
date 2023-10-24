import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AddHabitStack from './navigation/AddHabitStack';
import LoginStack from './navigation/LoginStack';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase/firebase-config';
import {LogBox} from 'react-native';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      user ? setIsSignedIn(true) : setIsSignedIn(false);
    });
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
    // LogBox.ignoreAllLogs(); //ALERT: remove when not doing a demo
  }, []);

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
