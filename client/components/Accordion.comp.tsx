import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {borderRadius, color, margin, padding} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useRef, useState} from 'react';
import Text from './Text.comp';

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
  containerStyle?: object;
};

const Accordion = (props: Props) => {
  const {children, title, description, containerStyle} = props;
  const [isOpen, setIsOpen] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          fadeAnim.setValue(isOpen ? 1 : 0);
          Animated.timing(fadeAnim, {
            toValue: isOpen ? 0 : 1,
            duration: 1500,
            useNativeDriver: true,
          }).start();
          setIsOpen(!isOpen);
        }}>
        <View style={styles.left}>
          <Text style={{marginBottom: margin.sm}}>{title}</Text>
          <Text style={{marginBottom: margin.sm}}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Icon
            style={styles.icon}
            name={isOpen ? 'chevron-up' : 'chevron-down'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {isOpen && children ? (
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          {children}
        </Animated.View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: padding.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: margin.md,
    borderColor: color.primary,
  },
  row: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: padding.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    width: 8,
    flex: 1,
  },
  left: {
    flex: 5,
  },
  icon: {
    color: color.primary,
  },
});

export default Accordion;
