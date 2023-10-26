import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color, padding} from '../../theme';
import React from 'react';
import Text from '../../components/Text.comp';

type Props = {
  title: string;
  onCheck: Function;
  onRemove: Function;
};

const TopMenu = (props: Props) => {
  const {title, onCheck, onRemove} = props;
  return (
    <View
      style={[
        styles.center,
        styles.row,
        styles.spaced,
        {paddingVertical: padding.lg},
      ]}>
      <TouchableOpacity onPress={() => onRemove()}>
        <Icon name="remove" size={30} color={color.primary} />
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => onCheck()}>
        <Icon name="check" size={30} color={color.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  spaced: {
    justifyContent: 'space-between',
  },
});

export default TopMenu;
