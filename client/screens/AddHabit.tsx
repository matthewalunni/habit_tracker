import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {border, fontSize, margin, padding} from '../theme';
import React from 'react';
import {Screen} from '../navigation/AddHabitWalkthrough';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25,
    color: 'white',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    fontSize: fontSize.lg,
    textAlign: 'center',
    color: 'tomato',
    padding: padding.sm,
    margin: margin.md,
    backgroundColor: 'white',
    borderRadius: border.xxl,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 60,
    tintColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  button: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  exit: {
    alignItems: 'flex-end',
    top: margin.xxl + margin.sm,
    right: margin.md,
    position: 'absolute',
    color: 'white',
    width: '100%',
  },
});

type ScreenItem = {
  index: number;
  item: Screen;
};

const AddHabit = (screenItem: ScreenItem) => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const {item} = screenItem;

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.exit}>
        <Icon.Button
          name="close"
          backgroundColor="transparent"
          underlayColor="transparent"
          size={25}
          onPress={() => navigate('Tabs')}
        />
      </View>
      {item.icon && <Icon name={item.icon} size={100} color={'white'} />}
      {/* if item.key_name is habit_frequency, then show a datepicker */}

      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.prompt_text}</Text>
        <TextInput style={styles.textInput} placeholder={item.placeholder} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddHabit;
