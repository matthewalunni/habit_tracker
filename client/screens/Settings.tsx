import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {borderRadius} from '../theme';
import {auth} from '../firebase/firebase-config';

const Settings = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    padding: 15,
    backgroundColor: 'tomato',
  },
});

export default Settings;
