import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import RoundInput from '../components/RoundInput.comp';
import {borderRadius, color, fontSize} from '../theme';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {auth, db} from '../firebase/firebase-config';
import Text from '../components/Text.comp';

type RegisterProps = {
  setIsSignedIn: (isSignedIn: boolean) => void;
  setRegisterSelected: (registerSelected: boolean) => void;
};

const Register = (props: RegisterProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const register = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        if (auth.currentUser) {
          props.setIsSignedIn(true);
          await setDoc(doc(db, 'users', auth.currentUser.uid), {
            firstName,
            lastName,
            email,
          });
          navigation.navigate('Tabs');
        }
      })

      .catch(error => {
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
    <>
      <Text style={styles.heading}>Hello!</Text>
      <Text style={styles.descriptionText}>
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
            register();
          }
        }}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Already have an account?</Text>
        <TouchableOpacity onPress={() => props.setRegisterSelected(false)}>
          <Text style={styles.smallText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </>
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
    backgroundColor: color.primary,
    color: color.background,
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
  heading: {
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: fontSize.lg,
    fontWeight: '300',
    textAlign: 'center',
    marginVertical: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    marginRight: 5,
  },
});

export default Register;
