import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import events from './Data';

export default function EventsAdv() {
    return (
        <ScrollView style={styles.container}>
            {events && events.map((events, index) => (
                <TouchableOpacity key={index} style={styles.card}>
                    <ImageBackground source={events.image} style={styles.image}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>{events.title}</Text>
                            <Text style={styles.description}>{events.description}</Text>
                            <Text style={styles.date}>{events.date}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        color: '#fff',
        marginTop: 10,
    },
});