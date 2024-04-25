import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
import MyGarage from './MyGarage';
import Dealership from './Dealership';
export default function Schedule() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [value, setValue] = useState('porsche_911_gt3r');
    const [items, setItems] = useState([
        { label: 'Porsche 911 GT3R', value: 'porsche_911_gt3r' },
        { label: '2012 Honda Accord EX', value: 'honda_accord_ex' },
    ]);
    const [form, setForm] = useState('service_form');
    const [forms, setForms] = useState([
        { label: 'Service Form #2', value: 'service_form2' },
        { label: 'Service Form #1', value: 'service_form1' },
    ]);
    const [service, setService] = useState('service_type');
    const [services, setServices] = useState([
        { label: 'Select Service', value: 'service_type1' },
        { label: 'Oil change', value: 'service_type2' },
        { label: 'Brake check', value: 'service_type3' },
        { label: 'Routine check', value: 'service_type4' },
        { label: 'Other', value: 'service_type5' },
    ]);

    const [selectedCar, setSelectedCar] = useState('Porsche 911 GT3R');


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.content}>
                    <View style={styles.dropdownContainer}>
                        <Image source={require('../assets/car.jpg')} style={styles.carImage} />
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownBox}
                            labelStyle={styles.dropdownLabel}
                            textStyle={styles.dropdownText}
                            arrowStyle={styles.dropdownArrow}
                        />
                    </View>

                    <View style={styles.formDropdownContainer}>
                        <DropDownPicker
                            open={openForm}
                            value={form}
                            items={forms}
                            setOpen={setOpenForm}
                            setValue={setForm}
                            setItems={setForms}
                            style={styles.formDropdownContainer}
                            dropDownContainerStyle={styles.dropdownBox}
                            labelStyle={styles.dropdownLabel}
                            textStyle={styles.dropdownText}
                            arrowStyle={styles.dropdownArrow}
                        />
                    </View>
                    <View style={styles.detailGroup}>
                        <Text style={styles.detailTitle}>Optional Upload</Text>
                        <View style={styles.photosContainer}>
                            <TouchableOpacity style={styles.photoButton}>
                                <Icon name="camera" size={20} color="#FFFFFF" />
                                <Text style={styles.photoButtonText}>  Camera</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.photoButton}>
                                <Icon name="file-image-o" size={20} color="#FFFFFF" />
                                <Text style={styles.photoButtonText}>  Photos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.photoButton}>
                                <Icon name="barcode" size={20} color="#FFFFFF" />
                                <Text style={styles.photoButtonText}>  Scan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.dealershipGroup}>
                        <Text style={styles.dealershipTitle}>Find by service</Text>

                        <View style={styles.serviceDropdownContainer}>
                            <DropDownPicker
                                open={openService}
                                value={service}
                                items={services}
                                setOpen={setOpenService}
                                setValue={setService}
                                setItems={setService}
                                style={styles.serviceDropdownContainer}
                                dropDownContainerStyle={styles.serviceDropdownContainer}
                                labelStyle={styles.dropdownLabel}
                                textStyle={styles.dropdownText}
                                arrowStyle={styles.dropdownArrow}
                            />

                        </View>
                        <TouchableOpacity style={styles.addService}>
                            <TouchableOpacity style={styles.addButton}>
                                <Icon name="plus" size={15} color="#FFFFFF" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.servicesGroup}>
                            <Text style={styles.serviceTitle}>Oil Change                                                 —</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.servicesGroup}>
                            <Text style={styles.serviceTitle}>Brake Check                                             —</Text>
                        </View>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={styles.connectButton} onPress={() => navigation.navigate('Dealership')}>
                        <Text style={styles.connectText}>Connect with dealership</Text>
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
    addService: {
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    serviceTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 10,
        zIndex: 1,
    },
    servicesGroup: {
        backgroundColor: '#313233',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        zIndex: 1,
    },
    connectText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    connectButton: {
        backgroundColor: '#FF5555',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    noteText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
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
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#313233',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 10,
        borderRadius: 5,
        zIndex: 3000,
    },
    carImage: {
        width: 80,
        height: 50,
        marginRight: 10,
        borderRadius: 5,
    },
    scrollViewContainer: {
        paddingBottom: 80,
        paddingTop: 35,
    },
    dropdown: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: '75%',
    },
    dropdownBox: {
        backgroundColor: '#313233',
        borderColor: 'transparent',
    },
    dropdownLabel: {
        color: 'white',
    },
    dropdownText: {
        color: 'white',
    },
    dropdownArrow: {
        tintColor: 'white',
        color: 'white',
    },
    formDropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#313233',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 0,
        zIndex: 1000,
    },
    serviceDropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#313233',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 0,
        zIndex: 2000,
    },
    container: {
        flex: 1,
        backgroundColor: '#242526',
    },
    content: {
        padding: 16,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailGroup: {
        backgroundColor: '#313233',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    detailTitle: {
        color: '#FF5555',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    detailLabel: {
        color: '#B0B0B0',
        fontSize: 14,
    },
    detailValue: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    dealershipGroup: {
        backgroundColor: '#313233',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        zIndex: 1000,
    },
    dealershipTitle: {
        color: '#FF5555',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    dealershipButton: {
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
    },
    dealershipButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    infoGroup: {
        backgroundColor: '#313233',
        flexDirection: 'column',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    infoTitle: {
        color: '#FF5555',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    infoButtonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },
    infoButton: {
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 5,
    },
    infoButtonText: {
        color: 'white',
        fontSize: 14,
    },
    photosGroup: {
        backgroundColor: '#313233',
        padding: 10,
        borderRadius: 5,
    },
    photosTitle: {
        color: '#FF5555',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    photosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
    },
    photoButton: {
        flexDirection: 'row',
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    photoButtonText: {
        color: 'white',
        fontSize: 14,
    },
});
