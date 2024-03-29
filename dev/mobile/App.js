import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Alert, Animated, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PocketBase from 'pocketbase';

export default function App() {

  const pb = new PocketBase('http://192.168.0.177:8090/');

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
    <SafeAreaView
    style={{
      backgroundColor: "#191A22",
      flex: 1,
      width: "100%",
      height: "100%",
    }}>
      <View>


        <Text style={{
          fontSize: '30',
          paddingTop: 50,
          paddingLeft: 10,
        }
        }>
          <Text style={{ color: "white" }}>Welcome
          {"\n"}back to{"\n"}</Text>
          <Text style={{ color: "red" }}>Car-Rillo.</Text>
        </Text>

        <Text style={
          {
            paddingTop: 5,
            color: "#636464",
            paddingLeft: 10
          }}>{"\n"}Your own digital pitstop.</Text>

        <View style={{
          padding: 20,
          paddingLeft: 15,
        }}>

          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              color: "white",
              borderRadius: 5,
              paddingLeft: 10,
            }}

            placeholder="Enter your email here"
          />
        </View>

        <View style={{
          padding: 20,
          paddingLeft: 15,
        }}>

          <Text>Password</Text>
          <TextInput
            value={pbHealth}
            onChangeText={setPbHealth}
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              color: "white",
              borderRadius: 5,
              paddingLeft: 10,
            }}

            placeholder="Enter your email here"
          />
        </View>

        <StatusBar style="auto" />

        <Button
          color="red"
          title="Get Test"
          onPress={handleGetTest}></Button>
      </View>


    </SafeAreaView>
  );
}