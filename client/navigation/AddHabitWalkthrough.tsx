import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import AddHabit from '../screens/AddHabit';

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
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const slides = walkthroughScreens.map((screenSpec: Screen, index) => {
    return {
      key: `${index}`,
      prompt_text: screenSpec.prompt_text,
      title: screenSpec.title,
      icon: screenSpec.icon,
    };
  });

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return <AddHabit item={item} index={0} />;
      }}
      showSkipButton={false}
      showPrevButton={true}
      showDoneButton={true}
      showNextButton={true}
      onSlideChange={index => {
        console.log(index);
      }}
      onDone={() => {
        navigate('Tabs');
      }}
    />
  );
};

export default AddHabitWalkthrough;
