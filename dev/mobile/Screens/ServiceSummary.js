import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CarDetailsScreen() {
  const [selectedCar, setSelectedCar] = useState({
    id: 1,
    name: '2023 Porsche 911 GT3R',
    mileage: '60000',
    license: 'CALIGT3R',
    vin: 'WP0ZZZ99ZYS692067',
    image: require('../assets/car.jpg'), // replace with your image path
    dealerships: ['Toyota Fremont', 'Honda Fremont'],
  });

  // Function to handle settings button press
  const handleSettingsPress = () => {
    // You can use navigation or state management to handle settings press here
    console.log('Settings Pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {/* Car Image and Name */}
          <View style={styles.imageAndNameContainer}>
            <Image source={selectedCar.image} style={styles.carImage} />
            <Text style={styles.carName}>{selectedCar.name}</Text>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={handleSettingsPress}>
              <Icon name="cog" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Car Mileage */}
          <View style={styles.mileageContainer}>
            <Text style={styles.mileageLabel}>Mileage:</Text>
            <Text style={styles.mileage}>{selectedCar.mileage}</Text>
          </View>

          {/* Car Details */}
          <View style={styles.detailGroup}>
            <Text style={styles.detailTitle}>Details</Text>
            <Text style={styles.detailItem}>LIC: {selectedCar.license}</Text>
            <Text style={styles.detailItem}>VIN: {selectedCar.vin}</Text>
          </View>

          {/* Connect to Dealership */}
          <View style={styles.dealershipGroup}>
            <Text style={styles.dealershipTitle}>Connect</Text>
            {selectedCar.dealerships.map((dealership, index) => (
              <TouchableOpacity key={index} style={styles.dealershipButton}>
                <Text style={styles.dealershipButtonText}>{dealership}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addButton}>
              <Icon name="plus" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Car Photos */}
          <View style={styles.photosGroup}>
            <Text style={styles.photosTitle}>Photos</Text>
            {/* Replace with actual photo buttons */}
            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonText}>Windshield</Text>
            </TouchableOpacity>
          </View>

          {/* Add New Car Button */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add New Car</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Navigator */}
      <View style={styles.tabBar}>
        {/* Tab items, replace with actual navigation if needed */}
        <Text style={styles.tabText}>MyGarage</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242526',
  },
  content: {
    padding: 16,
  },
  imageAndNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  carImage: {
    width: 150,
    height: 90,
    resizeMode: 'contain',
  },
  carName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    paddingHorizontal: 10,
  },
  settingsButton: {
    // Additional styling if needed
  },
  mileageContainer: {
    // Additional styling if needed
  },
  mileageLabel: {
    color: '#636464',
    fontSize: 14,
  },
  mileage: {
    color: '#50FA7B',
    fontSize: 16,
    fontWeight: 'bold',
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
 
});