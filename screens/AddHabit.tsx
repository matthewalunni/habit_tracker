import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {margin} from '../theme';

type Screen = {
  icon?: string;
  title: string;
  prompt_text: string;
  placeholder?: string;
  key_name?: string;
};

type ScreenItem = {
  dimensions: {
    width: number;
    height: number;
  };
  index: number;
  item: Screen;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
};

const walkthroughScreens: Screen[] = [
  {
    icon: undefined,
    title: 'Habit Name',
    prompt_text: "What's the name of your new habit? You can change it later.",
    placeholder: 'Workout, Water, Floss, etc.',
    key_name: 'habit_name',
  },
  {
    icon: 'plus',
    title: 'Educate',
    prompt_text:
      'See insights into your diet, and learn how to make it better. We will help you to make the most of your food.',
  },
  {
    icon: 'minus',
    title: 'Get Notified',
    prompt_text: "Let us think about meal planning, so you don't have to.",
  },
  {
    icon: 'bell',
    title: 'Disclaimer',
    prompt_text:
      "Values shown in the gfd meal log app are estimates. They are not 100% accurate. This app is not a substitute for a nutritionist's advice.",
  },
];

export default () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const slides = walkthroughScreens.map((screenSpec: Screen, index) => {
    return {
      key: `${index}`,
      prompt_text: screenSpec.prompt_text,
      title: screenSpec.title,
      icon: screenSpec.icon,
    };
  });

  const _renderItem = (screenItem: ScreenItem) => {
    const item = screenItem.item;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.exit}>
          <Icon.Button name="close" backgroundColor="transparent" size={25} />
        </View>
        {item.icon && <Icon name={item.icon} size={100} color={'white'} />}
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.prompt_text}</Text>
          <TextInput style={styles.textInput} placeholder={item.placeholder} />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem as () => React.ReactElement}
      showSkipButton={false}
      showPrevButton={true}
      showDoneButton={true}
      showNextButton={true}
      onDone={() => {
        navigation.navigate('Tabs');
      }}
    />
  );
};

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
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
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
