import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {borderRadius, color, margin, padding} from '../../theme';
import RoundInput from '../../components/RoundInput.comp';
import TopMenu from './TopMenu.comp';
import IconColor from './IconColor.comp';
import GoalCard from './GoalCard.comp';
import TrackTime from './TrackTime.comp';
import ReminderRibbon from './ReminderRibbon.comp';
import AdvancedSettingsRibbon from './AdvancedSettingsRibbon.comp';
import Text from '../../components/Text.comp';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const Add = () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopMenu
          title="Add a Habit"
          onCheck={() => {
            navigate('Home');
          }}
          onRemove={() => {
            navigate('Home');
          }}
        />
        <View style={{paddingVertical: padding.md}}>
          <Text style={{marginBottom: margin.sm}}>Name</Text>
          <RoundInput placeholder="Drink Water" />
        </View>

        <IconColor />
        <GoalCard />
        <TrackTime />

        <ReminderRibbon />
        <AdvancedSettingsRibbon />
      </ScrollView>
      <TouchableOpacity style={[styles.button, styles.fixed]}>
        <Text style={styles.buttonText}>Add Habit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.xl,
    backgroundColor: color.background,
  },
  button: {
    borderRadius: borderRadius.lg,
    padding: padding.sm,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixed: {
    position: 'relative',
    bottom: 30,
    left: 0,
    right: 0,
    padding: padding.lg,
  },
  buttonText: {
    color: color.background,
  },
});

export default Add;
