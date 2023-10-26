import {StyleSheet, View} from 'react-native';
import Accordion from '../../components/Accordion.comp';
import React, {useState} from 'react';
import {margin} from '../../theme';
import ButtonGroup from '../../components/ButtonGroup.comp';
import NumberPicker from '../../components/NumberPicker.comp';
import Text from '../../components/Text.comp';

const AdvancedSettingsRibbon = () => {
  const [habitType, setHabitType] = useState(0);
  const [countType, setCountType] = useState(0);
  const [badgeType, setBadgeType] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <Accordion
      title="Advanced Settings"
      description="Want to customize your habit even more?"
      containerStyle={styles.accordionBottomContainer}>
      <View style={styles.row}>
        <Text>Habit Type</Text>
        <ButtonGroup
          buttons={['Build', 'Quit']}
          selected={habitType}
          setSelected={setHabitType}
        />
      </View>
      <View style={styles.row}>
        <Text>Log Activity Using</Text>
        <ButtonGroup
          buttons={['Fixed Count', 'Custom Count']}
          selected={countType}
          setSelected={setCountType}
        />
      </View>

      {countType === 0 && (
        <View style={styles.row}>
          <NumberPicker value={count} setValue={setCount} min={1} max={100}>
            <Text>Each Tap</Text>
          </NumberPicker>
        </View>
      )}
      {countType === 1 && (
        <View style={styles.row}>
          <Text>
            Note: You will be prompted each time you tap your habit to input a
            custom amount.
          </Text>
        </View>
      )}
      <View style={styles.row}>
        <Text>Show Badge If Not Tapped</Text>
        <ButtonGroup
          buttons={['Yes', 'No']}
          selected={badgeType}
          setSelected={setBadgeType}
        />
      </View>
    </Accordion>
  );
};

const styles = StyleSheet.create({
  accordionBottomContainer: {
    borderTopWidth: 0,
    marginTop: 0,
    marginBottom: margin.xxl,
  },
  row: {
    marginVertical: margin.sm,
  },
});

export default AdvancedSettingsRibbon;
