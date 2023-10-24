import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Metrics from '../screens/Metrics';
import React from 'react';

const Tab = createBottomTabNavigator();

export default () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Metrics"
        component={Metrics}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerRight(_props) {
            return (
              <Icon.Button
                name="plus"
                backgroundColor="transparent"
                underlayColor="transparent"
                color="tomato"
                onPress={() => {
                  navigate('AddHabitWalkthrough');
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
