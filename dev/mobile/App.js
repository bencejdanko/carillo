import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Easing } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './Screens/Signin';
import MyGarage from './Screens/MyGarage';
import Schedule from './Screens/Schedule';
import CarDetails from './Screens/CarDetail';
import PocketBase from 'pocketbase';
import ServiceSummary from './Screens/ServiceSummary';
import Telematics from './Screens/Telematics';
import Dealership from './Screens/Dealership';
import Appointment from './Screens/Appointment';
import ProgressDetail from './Screens/ProgressDetail';
import PastService from './Screens/PastService';
import Feedback from './Screens/Feedback';
import Chat from './Screens/Chat';
const Stack = createNativeStackNavigator();

export default function App() {

  const pb = new PocketBase('http://' + process.env.IP_ADDRESS + ':8090/');

  const handleGetTest = async () => {
    try {
      const res = await pb.collection('repairOrders').getOne("37t3f7exqseru0p", {isAbort: false});
      setEmail(res.testing)
    } catch (error) {
      console.log(error.originalError)
      setEmail("" + error.originalError);
    }
    await handleGetHealth();
  }

  const handleGetHealth = async () => {
    try {
      const res = await pb.health.check()
      console.log(res)
    } catch (error) {
      console.log(error.originalError)
      setPbHealth("" + error.originalError);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none'}} >
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="MyGarage" component={MyGarage} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="ServiceSummary" component={ServiceSummary} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Telematics" component={Telematics} />
        <Stack.Screen name="Dealership" component={Dealership} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="ProgressDetail" component={ProgressDetail} />
        <Stack.Screen name="PastService" component={PastService} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}