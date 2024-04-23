import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

export default function Telematics() {
    navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Telematics</Text>
      <View style={styles.telematicsRow}>
        <Image
          source={require('../assets/carmd.jpg')}
          style={styles.icon}
        />
        <Image
          source={require('../assets/smartcar.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.featuresContainer}>
        <Text style={styles.feature}>Odometer</Text>
        <Text style={styles.feature}>Fuel Tank</Text>
        <Text style={styles.feature}>Tire Pressure</Text>
        <Text style={styles.feature}>Engine Oil Life</Text>
      </View>

      <TouchableOpacity style={styles.diagnosticButton}>
        <Text style={styles.diagnosticText}>Car Health Diagnostic</Text>
      </TouchableOpacity>

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
    container: {
        flex: 1,
        backgroundColor: '#242526',
        padding: 16,
      },
      sectionTitle: {
        color: '#FF5555',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 15,
      },
      telematicsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        marginBottom: 20,
      },
      icon: {
        width: '100%',
        height: 70, 
        resizeMode: 'contain', 
        borderRadius: 10, 
      },
      featuresContainer: {
        marginBottom: 20,
      },
      feature: {
        color: '#FFFFFF',
        fontSize: 30,
        marginVertical: 6, 
        marginLeft: 15,
        marginBottom: 15,
      },
      diagnosticButton: {
        backgroundColor: '#FF5555',
        padding: 16, 
        borderRadius: 8,
        alignItems: 'center',
      },
      diagnosticText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
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
});
