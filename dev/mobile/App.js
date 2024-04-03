import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signin from './Screens/Signin';
import MyGarage from './Screens/MyGarage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="MyGarage" component={MyGarage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}