import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogBox } from 'react-native';
export default function ServicePage() {
    const navigation = useNavigation();
    const [openForm, setOpenForm] = useState(false);
    const [serviceForm, setServiceForm] = useState('service_form1');
    const [serviceForms, setServiceForms] = useState([
        { label: 'Service Form #1', value: 'service_form1' },
        { label: 'Service Form #2', value: 'service_form2' },
    ]);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="angle-left" size={26} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Service Progress</Text>
            </View>

            <ScrollView style={styles.content}>
            <View style={styles.carContainer}>
            <Image source={require('../assets/car.jpg')} style={styles.carImage} />
                <Text style={styles.carName}>2023 Porsche 911 GT3R</Text>
            </View>

                <View style={styles.dropdownContainer}>
                    <DropDownPicker
                        open={openForm}
                        value={serviceForm}
                        items={serviceForms}
                        setOpen={setOpenForm}
                        setValue={setServiceForm}
                        setItems={setServiceForms}
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownBox}
                        textStyle={styles.dropdownText}
                        arrowStyle={styles.dropdownArrow}
                    />
                </View>

                <View style={styles.progressContainer}>
                    <Text style={styles.progressTitle}>Progress</Text>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFilled} />
                    </View>
                    <Text style={styles.etaText}>ETA: 2-3 Hours</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.ProgressSectionTitle}>In Progress</Text>
                    <TouchableOpacity style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>Brake Replacement</Text>
                        <Text style={styles.serviceDetails}>$215.00 - 2 Hours</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.PendingSectionTitle}>Pending</Text>
                    <TouchableOpacity style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>Multi-Point Inspection</Text>
                        <Text style={styles.serviceDetails}>$0 - 0.3 Hours</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.CompleteSectionTitle}>Completed</Text>
                    <TouchableOpacity style={styles.serviceCard}>
                        <Text style={styles.serviceTitle}>Oil Change</Text>
                        <Text style={styles.serviceDetails}>$78.00 - 0.5 Hours</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'space-between',
        backgroundColor: '#1F1F1F',
        padding: 18,
        paddingBottom: 23,
      },
      tabItem: {
        alignItems: 'center',
      },
      tabText: {
        color: 'white',
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
