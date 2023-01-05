import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import AddHabit from '../screens/AddHabit';

const Stack = createStackNavigator();

export default () => {
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
        name="AddHabit"
        component={AddHabit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
