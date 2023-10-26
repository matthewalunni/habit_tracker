import React from 'react';
import TopMenu from './Add/TopMenu.comp';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {color, margin, padding} from '../theme';
import Text from '../components/Text.comp';
import ButtonGroup from '../components/ButtonGroup.comp';
import RoundInput from '../components/RoundInput.comp';
import {ScrollView} from 'react-native-gesture-handler';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const ChangeGoal = () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopMenu
          title="Change Goal"
          onCheck={() => navigate('Add')}
          onRemove={() => navigate('Add')}
        />
        <View style={styles.row}>
          <Text>Repeat</Text>
          <ButtonGroup
            buttons={['Daily', 'Weekly']}
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
          <Text>With a Goal Of</Text>
          <RoundInput placeholder="1" />
        </View>
        <View style={styles.row}>
          <RoundInput placeholder="Cup(s)" />
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
});

export default ChangeGoal;
