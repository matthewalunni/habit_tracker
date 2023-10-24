import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {border, borderRadius, padding} from '../theme';
import {shadeColor} from '../utils';

type Props = {
  habitName: string;
  bgColor: string; // background color of completed progress
  progress: number; // 0 - 100
  onIncrement: () => void;
  onDecrement: () => void;
};

const ProgressBar = (props: Props) => {
  const {habitName, bgColor, progress, onIncrement, onDecrement} = props;
  const screenWidth = Dimensions.get('window').width;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 250,
      useNativeDriver: false,
    }).start();
  }, [fadeAnimation]);

  useEffect(() => {
    Animated.timing(width, {
      toValue: progress,
      duration: 750,
      delay: 250,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }, [width, progress]);

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: screenWidth - padding.md * 2,
      height: 75,
      backgroundColor: shadeColor(bgColor, 15),
      borderRadius: borderRadius.xl + 10,
      borderWidth: border.md,
      borderColor: shadeColor(bgColor, 15),
      marginTop: padding.sm,
    },
    filler: {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgColor,
      borderRadius: borderRadius.lg + 10,
      zIndex: 1,
      alignSelf: 'flex-start',
    },
    inner: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      zIndex: 2,
      width: screenWidth - padding.md * 2,
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      zIndex: 2,
      paddingHorizontal: padding.xxl,
    },
    icon: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      zIndex: 2,
      borderRadius: borderRadius.xl,
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.filler,
          opacity: fadeAnimation,
          width: width.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
            extrapolate: 'clamp',
          }),
        }}>
        <View style={styles.inner}>
          <Icon.Button
            name="minus"
            backgroundColor="transparent"
            underlayColor="transparent"
            color="white"
            style={styles.icon}
            onPress={onDecrement}
          />
          <Text style={styles.text}>{habitName}</Text>
          <Icon.Button
            name="plus"
            backgroundColor="transparent"
            underlayColor="transparent"
            color="white"
            style={styles.icon}
            onPress={onIncrement}
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default ProgressBar;
