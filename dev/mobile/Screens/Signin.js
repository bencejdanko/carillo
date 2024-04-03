import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, Keyboard, ScrollView } from 'react-native';

export default function Signin({ navigation }) {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#191A22",
                flex: 1,
                width: null,
                height: "100%",
            }}>

            <ScrollView>
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
                        padding: 10,
                        paddingLeft: 15,
                    }}>

                        <Text style={{
                            color: "white",
                            padding: 5
                        }}>{"\n"}Email</Text>


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
                        padding: 10,
                        paddingLeft: 15,
                    }}>

                        <Text style={{
                            color: "white",
                            padding: 5
                        }}>{"\n"}Password</Text>

                        <TextInput
                            value={password}
                            onChangeText={setPassword}
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

                </View>

                <Button
                    title="Sign In"
                    onPress={() => navigation.navigate('MyGarage')}
                ></Button>
            </ScrollView >
        </SafeAreaView>
    );
}