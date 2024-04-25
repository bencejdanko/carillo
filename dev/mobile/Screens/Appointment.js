import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarPicker from 'react-native-calendar-picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';

export default function Appointment() {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);
    const [textColor, setTextColor] = useState('white');
    const [openServiceForm, setOpenServiceForm] = useState(false);
    const [serviceForm, setServiceForm] = useState('service_form3');
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [serviceForms, setServiceForms] = useState([
        { label: 'Service Form #3', value: 'service_form3' },
        { label: 'Service Form #2', value: 'service_form2' },
        { label: 'Service Form #1', value: 'service_form1' },
    ]);

    const [openAdvisor, setOpenAdvisor] = useState(false);
    const [serviceAdvisor, setServiceAdvisor] = useState('Advisor 1');
    const [advisors, setAdvisors] = useState([
        { label: 'Advisor 1', value: 'advisor1' },
        { label: 'Advisor 2', value: 'advisor2' },
        { label: 'Advisor 3', value: 'advisor3' },
    ]);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const onTimeChange = (event, selected) => {
        if (selected) {
            setSelectedTime(selected);
            setShowTimePicker(false);
        }
    };
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    const openTimePicker = () => {
        setShowTimePicker(true);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Icon name="angle-left" size={26} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Set Appointment</Text>
                </View>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.label}>Service Form</Text>

                    <View style={styles.ServicedropdownContainer}>
                        <DropDownPicker
                            open={openServiceForm}
                            value={serviceForm}
                            items={serviceForms}
                            setOpen={setOpenServiceForm}
                            setValue={setServiceForm}
                            setItems={setServiceForms}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownBox}
                            textStyle={styles.dropdownText}
                            labelStyle={styles.dropdownLabel}
                        />
                    </View>

                    <Text style={styles.label}>Specify Service Advisor</Text>
                    <View style={styles.AdvisordropdownContainer}>
                        <DropDownPicker
                            open={openAdvisor}
                            value={serviceAdvisor}
                            items={advisors}
                            setOpen={setOpenAdvisor}
                            setValue={setServiceAdvisor}
                            setItems={setAdvisors}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownBox}
                            textStyle={styles.dropdownText}
                            labelStyle={styles.dropdownLabel}
                        />
                    </View>

                    <View style={styles.dropdownContainer}>
                        <Text style={styles.label}>Select a Time</Text>
                        <TouchableOpacity style={styles.timeButton} onPress={openTimePicker}>
                            <Text style={styles.timeText}>
                                {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {showTimePicker && (
                        <View style={styles.timePickerWrapper}>
                            <RNDateTimePicker
                                mode="time"
                                value={selectedTime}
                                onChange={onTimeChange}
                                is24Hour={false}
                                textColor="white"
                                display="spinner"
                                style={{ top: 0 }}
                            />
                        </View>
                    )}
                    <Text style={styles.label}>Select a date</Text>

                    <View style={styles.calendarContainer}>
                        <CalendarPicker
                            onDateChange={handleDateChange}
                            selectedDayColor="#FF5555"
                            todayBackgroundColor="#313233"
                            previousTitle="◀"
                            nextTitle="▶"
                            textStyle={{ color: 'white' }}
                        />
                    </View>

                    <TouchableOpacity style={styles.connectButton} onPress={() => navigation.navigate('Appointment')}>
                        <Text style={styles.connectText}>Schedule Appointment</Text>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#313233',
        paddingTop: 40,
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
        padding: 10,
        backgroundColor: '#fff',
    },
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
        marginBottom: 100,
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#242526',
    },
    content: {
        padding: 16,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        zIndex: 1,
    },
    ServicedropdownContainer: {
        marginBottom: 16,
        zIndex: 3000,
    },
    AdvisordropdownContainer: {
        marginBottom: 16,
        zIndex: 2000,
    },
    label: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        zIndex: 1,
    },
    dropdown: {
        backgroundColor: '#313233',
        borderWidth: 0,
        borderRadius: 10,
    },
    timePickerWrapper: {
        color: 'white',
        borderWidth: 0,
        borderRadius: 10,
        zIndex: 2000,
        alignItems: 'flex-start',
        marginLeft: -5,
        marginbottom: 10,
    },
    timePicker: {
        color: 'white',
        borderWidth: 0,
        borderRadius: 10,
        marginbottom: 10,

    },
    dropdownBox: {
        backgroundColor: '#313233',
        borderColor: 'transparent',
    },
    dropdownText: {
        color: 'white',
        zIndex: 2,

    },
    dropdownLabel: {
        color: 'white',
        zIndex: 2,

    },
    calendarContainer: {
        padding: 16,
        backgroundColor: '#313233',
        borderRadius: 10,
    },
    timeButton: {
        backgroundColor: '#313233',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        color: "white"
    },
    timeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
