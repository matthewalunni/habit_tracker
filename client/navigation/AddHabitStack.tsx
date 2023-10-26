import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import Add from '../screens/Add/Add.comp';
import ChangeGoal from '../screens/ChangeGoal';
import Reminder from '../screens/Reminder';

const Stack = createStackNavigator();

const AddHabitStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangeGoal"
        component={ChangeGoal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reminder"
        component={Reminder}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AddHabitStack;
