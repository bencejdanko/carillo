import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Appointment from './Appointment';
import { LogBox } from 'react-native';
export default function Dealership() {
    const navigation = useNavigation();
    const [favouriteDealership, setFavouriteDealership] = useState("Fremont Toyota");
    const [dealership, setDealership] = useState("Fremont Toyota");
    const [open, setOpen] = useState(false);

    const dealerships = [
        { label: 'Fremont Toyota', value: 'fremont_toyota1' },
        { label: 'Stevens Creek Toyota', value: 'fremont_toyota2' },
        { label: 'San Jose INFINITI', value: 'fremont_toyota3' },
    ];
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Icon name="angle-left" size={26} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Select dealership</Text>
                </View>
            <View style={styles.content}>
                <View style={styles.favouritesContainer}>
                    <Text style={styles.favouriteText}>Favourites</Text>
                    <TouchableOpacity style={styles.favouriteItem}>
                        <Text style={styles.favouriteLabel}>{favouriteDealership}</Text>
                    </TouchableOpacity>
                </View>

                <DropDownPicker
                    open={open}
                    value={dealership}
                    items={dealerships}
                    setOpen={setOpen}
                    setValue={setDealership}
                    setItems={() => { }}
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownBox}
                    labelStyle={styles.dropdownLabel}
                    textStyle={styles.dropdownText}
                    arrowStyle={styles.dropdownArrow}
                    placeholder="Find a dealership"
                    listMode="SCROLLVIEW"
                />

                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 37.5483,
                            longitude: -121.9886,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: 37.5483,
                                longitude: -121.9886,
                            }}
                            title="Fremont Toyota"
                        />
                    </MapView>
                </View>
                <TouchableOpacity style={styles.connectButton} onPress={() => navigation.navigate('Appointment')}>
                    <Text style={styles.connectText}>Confirm</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabBar}>
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('MyGarage')}
                >
                    <Icon name="car" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>MyGarage</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('ServiceSummary')}
                >
                    <Icon name="history" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('Schedule')}
                >
                    <Icon name="calendar" size={20} color="#FFFFFF" />
                    <Text style={styles.tabText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => navigation.navigate('Telematics')}
                >
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
      backButton: {
        padding: 8,
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
    },
    favouritesContainer: {
        padding: 10,
        backgroundColor: '#313233',
        borderRadius: 5,
        marginBottom: 10,
    },
    favouriteText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    favouriteItem: {
        backgroundColor: '#505050',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    favouriteLabel: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    dropdown: {
        backgroundColor: '#313233',
        borderWidth: 0,
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
    mapContainer: {
        height: 200,
        marginVertical: 10,
    },
    map: {
        flex: 1,
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
        marginTop: 10,
    },
});
