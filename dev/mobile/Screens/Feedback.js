import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Feedback() {
    const navigation = useNavigation();
    const [openForm, setOpenForm] = useState(false);
    const [serviceForm, setServiceForm] = useState('service_form1');
    const [serviceForms, setServiceForms] = useState([
        { label: 'Service Form #1', value: 'service_form1' },
        { label: 'Service Form #2', value: 'service_form2' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="angle-left" size={26} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Feedback</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.carContainer}>
                    <Image source={require('../assets/car.jpg')} style={styles.carImage} />
                    <Text style={styles.carName}>2023 Porsche 911 GT3R</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Toyota Fremont</Text>
                    <Text style={styles.infoText}>Service Date: 3/12/2023 - 3/13/2023</Text>
                    <Text style={styles.infoText}>Service Advisor: John Doe</Text>
                    <Text style={styles.infoText}>Technician: John Doe</Text>
                </View>


                <Text style={styles.serviceText}>Feedback</Text>

                <View style={styles.section}>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>How would you rate your service</Text>
                        <View style={styles.stars}>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>How would you rate your service</Text>
                        <View style={styles.stars}>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="star-o" size={30} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                        <View>
                            <Text style={styles.noteText}>Enter additional notes:</Text>
                        </View>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Enter additional notes here"
                            multiline={true}
                            numberOfLines={4}
                            placeholderTextColor="#313233"
                        />
                    </View>

                    <TouchableOpacity style={styles.connectButton}  onPress={() => navigation.navigate('Dealership')}>
                        <Text style={styles.connectText}>Send feedback</Text>
                    </TouchableOpacity>

            </ScrollView>

            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('MyGarage')}>
                    <Icon name="car" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>MyGarage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('ServiceSummary')}>
                    <Icon name="history" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Schedule')}>
                    <Icon name="calendar" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Telematics')}>
                    <Icon name="dashboard" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>Telematics</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1F1F1F',
        padding: 18,
        paddingBottom: 23,
    },
    tabItem: {
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        fontSize: 12,
        marginTop: 4,
    },
    connectText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    connectButton: {
        backgroundColor: '#FF5555',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 120,
    },
    textArea: {
        height: 120,
        justifyContent: "flex-start",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        borderRadius: 5,
        backgroundColor: '#313233',
        marginBottom: 12,
    },
    noteText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    receiptText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
    },
    receipt: {
        marginBottom: 10,
    },
    receiptCard: {
        backgroundColor: '#313233',
        borderRadius: 5,
        padding: 16,
        width: '45%',
        flexDirection: 'row',
    },
    serviceText: {
        color: '#FF5555',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoContainer: {
        padding: 16,
        backgroundColor: '#313233',
        marginBottom: 10,
        borderRadius: 5,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
    },
    infoTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#242526',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#313233',
        paddingTop: 40,
    },
    carImage: {
        width: 80,
        height: 50,
        marginRight: 10,
    },
    carContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    carName: {
        flex: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
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
        padding: 16,
    },
    dropdownContainer: {
        marginBottom: 16,
        zIndex: 1000,
    },
    dropdown: {
        backgroundColor: '#313233',
        borderRadius: 5,
        borderWidth: 0,
    },
    dropdownBox: {
        backgroundColor: '#313233',
        borderColor: 'transparent',
    },
    dropdownText: {
        color: 'white',
    },
    dropdownArrow: {
        color: 'white',
    },
    progressContainer: {
        marginBottom: 16,
    },
    progressTitle: {
        color: 'white',
        fontSize: 18,
    },
    progressBar: {
        height: 10,
        backgroundColor: '#505050',
        borderRadius: 5,
    },
    progressFilled: {
        backgroundColor: 'green',
        height: '100%',
        width: '60%',
        borderRadius: 5,
    },
    etaText: {
        color: 'white',
        fontSize: 14,
    },
    section: {
        marginBottom: 16,
    },
    ProgressSectionTitle: {
        color: '#f7d04d',
        fontSize: 18,
        fontWeight: 'bold',
    },
    PendingSectionTitle: {
        color: '#e85151',
        fontSize: 18,
        fontWeight: 'bold',
    },
    CompleteSectionTitle: {
        color: 'lightgreen',
        fontSize: 18,
        fontWeight: 'bold',
    },
    serviceCard: {
        backgroundColor: '#313233',
        borderRadius: 5,
        padding: 16,
        marginBottom: 10,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    serviceTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    serviceDetails: {
        color: '#B0B0B0',
        fontSize: 14,
    },
});
