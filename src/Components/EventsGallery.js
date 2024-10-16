// src/components/EventsGallery.js
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

// Dummy event data; replace with import from your data file.
const events = [
    {
        id: 1,
        title: "HackNiche 2.0 Hackathon",
        description: "HackNiche 2.0 is where the magic happens...",
        date: "17th - 18th February, 2024",
        image: require('./hackaniche.jpg'), // Replace with actual image paths
    },
    {
        id: 2,
        title: "DeepInsight ML Bootcamp",
        description: "Unleash the power of data...",
        date: "Coming Soon",
        image: require('./AIML.jpg'),
    },
    {
        id: 3,
        title: "Winter of Code Ideathon",
        description: "Ideate, Innovate, and Code your way through winter...",
        date: "10 Nov, 2023",
        image: require('./winter.jpg'),
    },
];

const { width } = Dimensions.get('window');

export default function EventsGallery() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image source={require('../path/to/background.jpg')} style={styles.backgroundImage} /> */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {events.map((events) => (
                    <View key={events.id} style={styles.squircleTab}>
                        <Image source={events.image} style={styles.eventImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{events.title}</Text>
                            <Text style={styles.description}>{events.description}</Text>
                            <Text style={styles.date}>{events.date}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    scrollContainer: {
        paddingVertical: 10,
        alignItems: 'center',
        paddingBottom: 70,
    },
    squircleTab: {
        width: width * 0.9,
        height: 250,
        marginVertical: 10,
        borderRadius: 30,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backgroundColor: 'transparent', // Keep it transparent
        position: 'relative',
    },
    eventImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)', // Fully transparent
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black', // Adjust to match background
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black', // Adjust to match background
        textAlign: 'center',
    },
    date: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black', // Adjust to match background
    },
});
