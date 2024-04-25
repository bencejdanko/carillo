import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Signin({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Handle sign-in logic here
        navigation.navigate('MyGarage');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.intro}>
                    <Text style={styles.welcomeText}>Welcome back to</Text>
                    <Text style={styles.appName}>Car-Rillo.</Text>
                    <Text style={styles.subtitle}>Your own digital pitstop.</Text>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email here"
                        placeholderTextColor="#636464"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password here"
                        secureTextEntry={true}
                        placeholderTextColor="#636464"
                    />
                </View>

                <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242526',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#313233',
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flexGrow: 1,
        padding: 16,
    },
    intro: {
        marginVertical: 20,
    },
    welcomeText: {
        color: 'white',
        fontSize: 16,
    },
    appName: {
        color: 'red',
        fontSize: 34,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#636464',
        fontSize: 16,
    },
    formGroup: {
        marginVertical: 10,
    },
    label: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#191A22',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    signInButton: {
        backgroundColor: '#FF5555',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    signInButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
