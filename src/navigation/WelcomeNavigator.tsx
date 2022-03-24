import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from 'screens';

export type WelcomeStackParamList = {
  Welcome: undefined;
};

const Stack = createStackNavigator();

export const WelcomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />
    </Stack.Navigator>
  );
};
