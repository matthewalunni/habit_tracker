import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Metrics from '../screens/Metrics';
import React from 'react';
import {color as themeColor} from '../theme';

const Tab = createBottomTabNavigator();

export default () => {
  const {navigate} = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: themeColor.secondary,
        tabBarInactiveTintColor: themeColor.primary,
        tabBarStyle: {
          backgroundColor: themeColor.background,
          borderTopColor: themeColor.secondary,
        },
        headerStyle: {
          backgroundColor: themeColor.background,
          shadowColor: 'transparent',
        },
        headerTitleStyle: {
          color: themeColor.secondary,
        },
      }}>
      <Tab.Screen
        name="Metrics"
        component={Metrics}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="bar-chart" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerRight(_props) {
            return (
              <FontAwesome5.Button
                name="plus"
                backgroundColor="transparent"
                underlayColor="transparent"
                size={30}
                color={themeColor.primary}
                onPress={() => {
                  navigate('Add');
                }}
              />
            );
          },
          tabBarIcon: ({color}) => (
            <Icon name="tasks" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => <Icon name="gear" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
