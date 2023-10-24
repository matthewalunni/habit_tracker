import React, {FC} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

type ButtonSectionProps = {
  q1Tapped: () => void;
  q2Tapped: () => void;
  q3Tapped: () => void;
};

type QuarterButtonProps = {
  onPress: () => void;
  title: string;
};

const QuarterButton: FC<QuarterButtonProps> = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const ButtonSection: FC<ButtonSectionProps> = ({
  q1Tapped,
  q2Tapped,
  q3Tapped,
}) => {
  return (
    <View style={styles.container}>
      <QuarterButton onPress={q1Tapped} title={'Weekly'} />
      <QuarterButton onPress={q2Tapped} title={'Monthly'} />
      <QuarterButton onPress={q3Tapped} title={'Yearly'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 5,
  },
  buttonContainer: {
    height: 25,
    width: 75,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ButtonSection;
