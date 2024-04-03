import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signin from './Screens/Signin';
import MyGarage from './Screens/MyGarage';
import Schedule from './Screens/Schedule';

const Stack = createNativeStackNavigator();

export default function App() {

  const pb = new PocketBase('http://' + process.env.IP_ADDRESS + ':8090/');

  const [pbHealth, setPbHealth] = useState('');
  const [email, setEmail] = useState('');

  const handleGetTest = async () => {
    try {
      const res = await pb.collection('test').getOne("37t3f7exqseru0p", {isAbort: false});
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
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="MyGarage" component={MyGarage} />
        <Stack.Screen name="Schedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}