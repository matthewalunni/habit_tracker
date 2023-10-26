import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {padding, margin, color, borderRadius} from '../../theme';
import React, {useState} from 'react';
import Text from '../../components/Text.comp';

type SquareButton = {
  onPress: () => void;
  icon: string;
  text: string;
};

const buttons: SquareButton[] = [
  {
    onPress: () => {},
    icon: 'calendar',
    text: 'All Day',
  },
  {
    onPress: () => {},
    icon: 'sun-o',
    text: 'Morning',
  },
  {
    onPress: () => {},
    icon: 'cloud',
    text: 'Afternoon',
  },
  {
    onPress: () => {},
    icon: 'moon-o',
    text: 'Night',
  },
];

const TrackTime = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{paddingVertical: padding.md}}>
      <Text style={{marginBottom: margin.sm}}>Track During</Text>
      <View style={[styles.center, styles.row]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.square,
                {
                  backgroundColor:
                    selected === index ? color.primary : color.background,
                },
              ]}
              onPress={() => setSelected(index)}>
              <Icon
                name={button.icon}
                size={25}
                color={selected === index ? color.background : color.primary}
              />
              <Text
                style={[
                  styles.buttonText,
                  {
                    color:
                      selected === index ? color.background : color.primary,
                  },
                ]}>
                {button.text}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: margin.sm,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  buttonText: {
    marginTop: margin.sm,
  },
});

export default TrackTime;
