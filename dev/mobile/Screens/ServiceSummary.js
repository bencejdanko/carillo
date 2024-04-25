import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chat from './Chat';
import PastService from './PastService';
import Feedback from './Feedback'; 
import { useNavigation } from '@react-navigation/native';
import ProgressDetail from './ProgressDetail';
import MyGarage from './MyGarage';
import { LogBox } from 'react-native';
export default function ServiceSummary() {
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
    { label: 'Service Form #2', value: 'service_form' },
    { label: 'Service Form #1', value: 'service_form' },
  ]);
  const [service, setService] = useState('service_type');
  const [services, setServices] = useState([
    { label: 'Select Service', value: 'service_type' },
    { label: 'Oil change', value: 'service_type' },
    { label: 'Brake check', value: 'service_type' },
    { label: 'Routine check', value: 'service_type' },
    { label: 'Other', value: 'service_type' },
  ]);
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

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
          <View style={styles.serviceCard}>
            <Text style={styles.infoTitle}>Ongoing</Text>
            <View style={styles.header}>
              <Text style={styles.title}>Toyota Fremont</Text>
              <Text style={styles.promisedTime}>Promised Time: <Text style={styles.timeHighlight}>6pm</Text></Text>
            </View>

            <View style={styles.progressContainer}>
              <View style={{ width: 200, backgroundColor: 'green', height: 6 }} />
            </View>

            <View style={styles.detailsContainer}>
              <Image source={require('../assets/car.jpg')} style={styles.serviceImage} />
              <View style={styles.advisorTechnician}>
                <Text style={styles.infoText}>Service Advisor: Trung Tran</Text>
                <Text style={styles.infoText}>Technician: Clayton Carrillo</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('ProgressDetail')}>
                <Icon name="info-circle" size={18} color="#FFFFFF" />
                  <Text style={styles.buttonText}>  Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Chat')}>
                <Icon name="comment" size={18} color="#FFFFFF" />
                  <Text style={styles.buttonText}>  Request Chat</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.serviceCard}>
            <Text style={styles.detailTitle}>Last month</Text>
            <Text style={styles.detailLabel}>3/12/2024 - 3/13/2024</Text>
            <View style={styles.header}>
              <Text style={styles.title}>Toyota Fremont</Text>
            </View>

            <View style={styles.detailsContainer}>
              <Image source={require('../assets/car.jpg')} style={styles.serviceImage} />
              <View style={styles.advisorTechnician}>
                <Text style={styles.infoText}>Service Advisor: Trung Tran</Text>
                <Text style={styles.infoText}>Technician: Clayton Carrillo</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('PastService')}>
                  <Icon name="info-circle" size={18} color="#FFFFFF" />
                  <Text style={styles.buttonText}>  Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Feedback')}>
                <Icon name="comment" size={18} color="#FFFFFF" />
                  <Text style={styles.buttonText}>  Feedback</Text>
                </TouchableOpacity>
                </View>
            </View>
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
  serviceCard: {
    backgroundColor: '#2C2C2C',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  promisedTime: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  timeHighlight: {
    color: '#50FA7B',
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#505050',
    borderRadius: 5,
    marginBottom: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceImage: {
    width: 100,
    height: 60,
    borderRadius: 5,
  },
  advisorTechnician: {
    flexDirection: 'column',
    paddingLeft: 16,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 40,
  },
  actionButtons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionButton: {
    flexDirection: 'row',
    marginLeft: 10,
    backgroundColor: '#313233',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },



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
    fontSize: 20,
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
    paddingTop: 50,
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
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 5,
    zIndex: 2000,
  },
  formDropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#313233',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 5,
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
    zIndex: 2000,
    borderColor: 'RED',
  },
  carImage: {
    width: 80,
    height: 50,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  scrollViewContainer: {
    paddingBottom: 200,
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
    marginBottom: 2,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    color: '#B0B0B0',
    fontSize: 14,
    marginBottom: 10,
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
    marginBottom: 10,
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
    backgroundColor: '#505050',
    padding: 10,
    borderRadius: 5,
  },
  photoButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
