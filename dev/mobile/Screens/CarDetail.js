import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CarDetailsScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('porsche_911_gt3r');
  const [items, setItems] = useState([
    { label: 'Porsche 911 GT3R', value: 'porsche_911_gt3r' },
    { label: 'Honda Accord Ex', value: 'honda_accord_ex' },
  ]);
  const carDetails = {
    license: 'CALIGT3R',
    vin: 'WP0ZZZ99ZYS692067',
    dealerships: ['Toyota Fremont', 'Honda Fremont'],
  };

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

          <View style={styles.detailGroup}>
            <Text style={styles.detailTitle}>Details</Text>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>LIC:</Text>
              <Text style={styles.detailValue}>{carDetails.license}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>VIN:</Text>
              <Text style={styles.detailValue}>{carDetails.vin}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Model:</Text>
              <Text style={styles.detailValue}>Porsche 911 GT3 R</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Make:</Text>
              <Text style={styles.detailValue}>Porsche</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Year:</Text>
              <Text style={styles.detailValue}>2023</Text>
            </View>
          </View>

          <View style={styles.dealershipGroup}>
            <Text style={styles.dealershipTitle}>Connect</Text>

            {carDetails.dealerships.map((dealership, index) => (
              <TouchableOpacity key={index} style={styles.dealershipButton}>
                <Text style={styles.dealershipButtonText}>{dealership}</Text>
              </TouchableOpacity>

            ))}
            <TouchableOpacity style={styles.dealershipButton}>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="plus" size={12} color="#FFFFFF" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.infoTitle}>Car Information</Text>
            <View style={styles.infoButtonGroup}>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>MPG: 25</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoButtonText}>Range: 250 miles</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.photosGroup}>
            <Text style={styles.photosTitle}>Photos</Text>
            <View style={styles.photosContainer}>
              <TouchableOpacity style={styles.photoButton}>
                <Icon name="camera" size={20} color="#FFFFFF" />
                <Text style={styles.photoButtonText}>Windshield</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.photoButton}>
                <Icon name="camera" size={20} color="#FFFFFF" />
                <Text style={styles.photoButtonText}>Bumper</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Icon name="camera" size={20} color="#FFFFFF" />
                <Text style={styles.photoButtonText}>Damage</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>

      <View style={styles.tabBar}>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({


  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#313233',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  carImage: {
    width: 80,
    height: 50,
    marginRight: 10,
  },
  scrollViewContainer: {
    paddingBottom: 200,
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
    backgroundColor: '#505050',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  photoButtonText: {
    color: 'white',
    fontSize: 14,
  },
  tabBar: {
    backgroundColor: '#1F1F1F',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
