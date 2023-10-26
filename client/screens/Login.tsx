import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {borderRadius, color, fontSize} from '../theme';
import RoundInput from '../components/RoundInput.comp';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase/firebase-config';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Text from '../components/Text.comp';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  setIsSignedIn: (arg0: boolean) => void;
  setRegisterSelected: (arg0: boolean) => void;
};

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation<StackNavigationProp<ParamListBase>>();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        props.setIsSignedIn(true);
        navigate('Tabs');
      })
      .catch(error => {
        Alert.alert(error.message.toString());
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
    <>
      <Text style={styles.header}>Hello!</Text>
      <Text style={styles.descriptionText}>
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
            signIn();
          }
        }}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.centerRow}>
        <Text style={[styles.smallText, styles.notAMember]}>Not a member?</Text>
        <TouchableOpacity onPress={() => props.setRegisterSelected(true)}>
          <Text>Register now</Text>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        value={new Date()}
        mode="datetime"
        display="default"
        onChange={() => {}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    borderRadius: borderRadius.lg,
    padding: 15,
    backgroundColor: color.primary,
  },
  buttonText: {
    color: color.background,
    textAlign: 'center',
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
    borderColor: color.primary,
    padding: 15,
    width: '100%',
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    height: '100%',
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notAMember: {
    textAlign: 'center',
    marginRight: 5,
  },
  header: {
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: fontSize.lg,
    fontWeight: '300',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Login;
