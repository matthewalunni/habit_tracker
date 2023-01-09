import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {borderRadius, fontSize} from '../theme';
import RoundInput from '../components/RoundInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {login} from '../api';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const logIn_onClick = () => {
    login(email, password)
      .then((response: Response) => {
        if (!response.ok) {
          response.json().then(data => {
            Alert.alert(data.message);
          });
          return;
        }
        if (response.status === 200) {
          props.setIsSignedIn(true);
          navigation.navigate('Tabs');
        }
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  const validateForm = () => {
    if (email.length < 3) {
      Alert.alert('Email must be at least 3 characters long');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center'}}>Hello!</Text>
      <Text
        style={{
          fontSize: fontSize.lg,
          fontWeight: '300',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        If it's your first time, welcome! Create an account to log in. If not,
        sign in and get started!
      </Text>
      <RoundInput
        placeholder="Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        style={styles.input}
      />
      <RoundInput
        placeholder="Password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        secureTextEntry={true}
        style={styles.input}
      />
      <Text style={styles.smallText}>Recover Password</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (validateForm()) {
            logIn_onClick();
          }
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.smallText, {textAlign: 'center', marginRight: 5}]}>
          Not a member?
        </Text>
        <TouchableOpacity onPress={() => props.setRegisterSelected(true)}>
          <Text>Register now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    padding: 15,
    backgroundColor: 'tomato',
  },
  smallText: {
    fontSize: fontSize.sm,
    fontWeight: '300',
    textAlign: 'right',
    marginVertical: 10,
  },
  input: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'tomato',
    padding: 15,
    width: '100%',
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    height: '100%',
  },
});
