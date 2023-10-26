import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import AddHabit from '../screens/AddHabit';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import {auth, db} from '../firebase/firebase-config';
import {Habit} from '../types/Habit';

export type Screen = {
  icon?: string;
  title: string;
  prompt_text: string;
  placeholder?: string;
  key_name?: string;
  onSubmit?: Function;
};

const walkthroughScreens: Screen[] = [
  {
    icon: undefined,
    title: 'Habit Name',
    prompt_text: "What's the name of your new habit? You can change it later.",
    key_name: 'habit_name',
  },
  {
    icon: undefined,
    title: 'Habit Description',
    prompt_text: 'Add a description for your habit. You can change it later.',
    key_name: 'habit_description',
  },
  {
    icon: undefined,
    title: 'Add your Habit Frequency',
    prompt_text:
      'Add a frequency for your habit. This could be many times a day, week, or month. You can change this later.',
    key_name: 'habit_frequency',
  },
];

const AddHabitWalkthrough = () => {
  const [habitName, setHabitName] = useState();
  const [habitDescription, setHabitDescription] = useState();
  const [habitFrequency, setHabitFrequency] = useState();
  const [fieldValue, setFieldValue] = useState();
  const [error, setError] = useState();
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const slides = walkthroughScreens.map((screenSpec: Screen, index) => {
    return {
      key: `${index}`,
      prompt_text: screenSpec.prompt_text,
      title: screenSpec.title,
      icon: screenSpec.icon,
    };
  });

  const addHabit = (index: number) => {
    switch (index) {
      case 0:
        setHabitName(fieldValue);
        break;
      case 1:
        setHabitDescription(fieldValue);
        break;
      case 2:
        setHabitFrequency(fieldValue);
        break;
      default:
        break;
    }
  };

  const submitHabit = async () => {
    const habit: Habit = {
      name: habitName || 'habit',
      description: habitDescription || 'description',
      frequency: habitFrequency || 'frequency',
      bgColor: '#219ebc',
      startDate: new Date(),
      completed: 0,
    };

    const userRef = doc(db, 'users', auth.currentUser!.uid);
    const user = await getDoc(userRef);
    const habits = user.data()?.habits;

    habits.push(habit);

    await updateDoc(userRef, {habits})
      .then(() => {
        navigate('Tabs');
      })
      .catch(e => {
        setError(e);
      });
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return (
          <AddHabit
            item={item}
            index={0}
            setFieldValue={setFieldValue}
            error={error}
          />
        );
      }}
      showSkipButton={false}
      showPrevButton={true}
      showDoneButton={true}
      showNextButton={true}
      onSlideChange={addHabit}
      onDone={async () => {
        await submitHabit();
      }}
    />
  );
};

export default AddHabitWalkthrough;
