// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const Navbar = () => {
    const navigation = useNavigation(); // Get the navigation object

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('./home.png')} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Team')}>
                <Image source={require('./TEAM.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
                <Image source={require('./EVENTS.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
                <Image source={require('./gallery.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around',
        position: 'absolute', // Position it absolutely
        bottom: 0, // Align to the bottom of the screen
        left: 0, // Align to the left edge
        right: 0,
    },
    navButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        width: 30, // Reduced size for icons
        height: 30, // Reduced size for icons
        // backgroundColor: 'rgba(255,255,255,0)'
        opacity: 1
    },
    icons: {

        width: 20, // Reduced size for icons
        height: 20, // Reduced size for icons
        // backgroundColor: 'rgba(255,255,255,0)'
        opacity: 1,
        marginTop: 6
    }
});

export default Navbar;
