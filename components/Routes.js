import React from "react";
import {  View} from "react-native";
import Login from './Login'
import Signup from './Signup'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
     
          <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
     
    </Stack.Navigator>
    
    
  );
}