import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import AddHabitWalkthrough from './AddHabitWalkthrough';

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
        name="AddHabitWalkthrough"
        component={AddHabitWalkthrough}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AddHabitStack;
