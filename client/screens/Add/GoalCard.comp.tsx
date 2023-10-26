import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {padding, margin, color, borderRadius} from '../../theme';
import React from 'react';
import Text from '../../components/Text.comp';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const GoalCard = () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View style={{paddingVertical: padding.md}}>
      <Text style={{marginBottom: margin.sm}}>Goal</Text>
      <View style={styles.card}>
        <View style={[styles.spaced, styles.row]}>
          <View>
            <Text>1 time(s)</Text>
            <Text>or more per day</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigate('ChangeGoal')}
              style={styles.button}>
              <Text style={styles.buttonText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.row, styles.goalContainer]}>
          <Icon
            style={{paddingRight: padding.sm}}
            name="repeat"
            color={color.primary}
          />
          <Text>Daily</Text>
          <Icon
            style={{paddingHorizontal: padding.sm}}
            name="bell"
            color={color.primary}
          />
          <Text>Every Day</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: borderRadius.md,
    paddingVertical: padding.sm,
    paddingHorizontal: padding.lg,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: color.background,
  },
  card: {
    borderRadius: borderRadius.md,
    backgroundColor: color.background,
    borderWidth: 1,
    borderColor: color.primary,
    paddingVertical: padding.md,
    paddingHorizontal: padding.lg,
  },
  spaced: {
    justifyContent: 'space-between',
  },
  goalContainer: {
    alignItems: 'center',
    padding: padding.md,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: borderRadius.md,
    marginBottom: margin.sm,
    marginTop: margin.md,
  },
});

export default GoalCard;
