import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from '../screens/Login';
import Register from '../screens/Register';

type LoginStackProps = {
  setIsSignedIn: (isSignedIn: boolean) => void;
};

export default (props: LoginStackProps) => {
  const [registerSelected, setRegisterSelected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {registerSelected ? (
        <Register setRegisterSelected={setRegisterSelected} {...props} />
      ) : (
        <Login setRegisterSelected={setRegisterSelected} {...props} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 25,
  },
});
