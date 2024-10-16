// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const translations = ['Welcome to GDSC', 'GDSC में आपका स्वागत है', 'GDSC এ আপনাকে স্বাগতম'];

const HomePage = () => {
    const [welcomeText, setWelcomeText] = useState(translations[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % translations.length);
            setWelcomeText(translations[index]);
        }, 1500); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [index]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>{welcomeText}</Text>
            <Image
                source={require('./logo_gdsc.png')} // Update the path to your GDSC logo
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    logo: {
        width: 100, // Adjust the size as needed
        height: 100,
    },
});

export default HomePage;
