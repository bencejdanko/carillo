import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function MyGarageScreen() {
  const cars = [
    {
      id: 1,
      name: '2023 Porsche 911 GT3R',
      mileage: '60000',
      image: require('../assets/car.jpg'),
    },
    {
      id: 2,
      name: '2024 Toyota GR Supra',
      mileage: '3000',
      image: require('../assets/car2.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>MyGarage</Text>
          <Text style={styles.welcomeText}>Welcome John Doe.</Text>

          {cars.map((car) => (
            <View key={car.id} style={styles.carContainer}>
              <View style={styles.imageAndNameContainer}>
                <Image source={car.image} style={styles.carImage} />
                <Text style={styles.carName}>{car.name}</Text>
              </View>
              <View style={styles.mileageContainer}>
                <Text style={styles.mileageLabel}>mileage:</Text>
                <Text style={styles.mileage}>{car.mileage}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>MyGarage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabText}>Telematics</Text>
        </TouchableOpacity>
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
  title: {
    color: '#FF5555',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#636464',
    fontSize: 18,
    marginBottom: 16,
  },

  carContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#313233',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  imageAndNameContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },

  carImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  carName: {
    color: '#636464',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 12,
  },

  mileageContainer: {
    flexDirection: 'column',
    justifyContent: 'left', 
    flex: 1,
    marginLeft: 20,
  },

  mileageLabel: {
    color: '#636464',
    fontSize: 14,
    marginTop: 20,
  },
  mileage: {
    color: '#50FA7B',
    fontSize: 16, 
    fontWeight: 'bold',
    flex: true,
    marginTop: 5
  },
  addButton: {
    marginVertical: 16,
    padding: 20,
    backgroundColor: '#313233',
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F1F1F',
    padding: 8,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
  },
});