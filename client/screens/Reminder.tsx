import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {borderRadius, color, margin, padding} from '../theme';
import TopMenu from './Add/TopMenu.comp';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import RoundInput from '../components/RoundInput.comp';
import ButtonGroup from '../components/ButtonGroup.comp';
import Text from '../components/Text.comp';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '../components/DateTimePicker.comp';

const Reminder = () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopMenu
          title="Reminder"
          onCheck={() => navigate('Add')}
          onRemove={() => navigate('Add')}
        />
        <RoundInput placeholder="Motivate your future self" />

        <View style={styles.row}>
          <Text>Repeat</Text>
          <ButtonGroup
            buttons={['Daily', 'Weekly', 'None']}
            selected={0}
            setSelected={() => {}}
          />
        </View>

        <View style={styles.row}>
          <Text>On These Days</Text>
          <ButtonGroup
            buttons={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            selected={0}
            setSelected={() => {}}
          />
        </View>

        <View style={styles.row}>
          <Text>Notify At</Text>
          <View style={styles.timeSelectContainer}>
            <TouchableOpacity
              style={styles.timeSelectHeaderButton}
              onPress={() => setIsOpen(!isOpen)}>
              <View>
                <Text>3:30pm</Text>
                <Text>Reminder Time</Text>
              </View>
              <Icon
                name={isOpen ? 'chevron-up' : 'chevron-down'}
                color={color.primary}
              />
            </TouchableOpacity>
            {isOpen && (
              <View>
                <DateTimePicker />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: padding.xl,
    backgroundColor: color.background,
  },
  row: {
    marginVertical: margin.sm,
  },
  timeSelectContainer: {
    borderWidth: 1,
    padding: padding.md,
    borderRadius: borderRadius.lg,
    borderColor: color.primary,
  },
  timeSelectHeaderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Reminder;
