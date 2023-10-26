import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from '../theme';

type LoginStackProps = {
  setIsSignedIn: (isSignedIn: boolean) => void;
};

export default (props: LoginStackProps) => {
  const [registerSelected, setRegisterSelected] = useState(false);

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {registerSelected ? (
          <Register setRegisterSelected={setRegisterSelected} {...props} />
        ) : (
          <Login setRegisterSelected={setRegisterSelected} {...props} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: color.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
