import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Chat() {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi, how can I help you?', user: 'other' },
        { id: 2, text: 'Hi! When can I come pick up the car?', user: 'me' },
        { id: 3, text: 'It will be ready by today at 4pm. We are finishing up the brake replacement', user: 'other' },
    ]);
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: inputText, user: 'me' }]);
            setInputText('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="angle-left" size={26} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chat</Text>
            </View>
            <ScrollView style={styles.messageList}>
                {messages.map((msg) => (
                    <View
                        key={msg.id}
                        style={[
                            styles.messageContainer,
                            msg.user === 'me' ? styles.myMessage : styles.otherMessage,
                        ]}
                    >
                        <Text style={styles.messageText}>{msg.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type a message..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Icon name="send" size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#313233',
        width: 500,
        marginLeft: -20,
        marginTop: -20,
        paddingTop: 50,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        padding: 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#242526',
        padding: 16,
    },
    messageList: {
        flex: 1,
    },
    messageContainer: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 7,
        maxWidth: '70%',

    },
    myMessage: {
        backgroundColor: '#313233',
        alignSelf: 'flex-end',
    },
    otherMessage: {
        backgroundColor: '#505050',
        alignSelf: 'flex-start',
    },
    messageText: {
        color: '#FFFFFF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#313233',
        borderRadius: 10,
        marginBottom: 40,
    },
    textInput: {
        flex: 1,
        color: '#FFFFFF',
        backgroundColor: '#313233',
        padding: 10,
        borderRadius: 10,
    },
    sendButton: {
        backgroundColor: '#FF5555',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
});
