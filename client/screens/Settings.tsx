import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {borderRadius, color} from '../theme';
import {auth} from '../firebase/firebase-config';
import Text from '../components/Text.comp';

const Settings = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.background,
  },
  button: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    padding: 15,
    backgroundColor: color.primary,
  },
  buttonText: {
    color: color.background,
  },
});

export default Settings;
