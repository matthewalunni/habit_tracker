import {StyleSheet} from 'react-native';
import Accordion from '../../components/Accordion.comp';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {borderRadius, color, margin, padding} from '../../theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/Text.comp';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

const ReminderRibbon = () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Accordion
      title="Reminder"
      description="Set up reminders to help you stay on track">
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigate('Reminder');
        }}>
        <FontAwesome5 style={styles.buttonInner} name="plus" size={20} />
        <Text style={styles.buttonInner}>Add Reminder</Text>
      </TouchableOpacity>
    </Accordion>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    color: color.background,
    borderRadius: borderRadius.lg,
    flexDirection: 'row',
    padding: padding.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInner: {
    margin: margin.sm,
    color: color.background,
  },
});

export default ReminderRibbon;
