import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {register} from '../api';
import RoundInput from '../components/RoundInput';
import {borderRadius, fontSize} from '../theme';

export default (props: any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const register_onClick = async () => {
    await register(firstName, lastName, email, password)
      .then((response: Response) => {
        if (!response.ok) {
          response.json().then(data => {
            setErrorMessage(data.message);
          });
          return;
        }
        if (response.status === 200) {
          props.setIsSignedIn(true);
          navigation.navigate('AddHabit');
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const validateForm = () => {
    if (firstName.length < 3) {
      setErrorMessage('First name must be at least 3 characters long');
      return false;
    }
    if (lastName.length < 3) {
      setErrorMessage('Last name must be at least 3 characters long');
      return false;
    }
    if (email.length < 3) {
      setErrorMessage('Email must be at least 3 characters long');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <RoundInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <RoundInput
        placeholder="Email"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setErrorMessage('');
        }}
        style={styles.input}
      />
      <RoundInput
        placeholder="Password"
        value={password}
        onChangeText={text => {
          setPassword(text);
          setErrorMessage('');
        }}
        secureTextEntry={true}
        style={styles.input}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (validateForm()) {
            register_onClick();
          }
        }}>
        <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{textAlign: 'center', marginRight: 5}}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => props.setRegisterSelected(false)}>
          <Text style={styles.smallText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    padding: 15,
    backgroundColor: 'tomato',
  },
  smallText: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 10,
  },
  input: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    padding: 15,
    width: '100%',
  },
});
