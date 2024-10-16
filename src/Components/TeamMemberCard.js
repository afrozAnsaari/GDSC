import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Linking, Alert } from 'react-native';



const TeamMemberCard = () => {
    const [isHovered, setHovered] = useState(false);
    const handleLink = (url) => {
        Linking.openURL(url).catch((err) => Alert.alert("An error occurred", err));
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Image
                    source={{ uri: 'https://gdsc-djsce-website-23-24.vercel.app/static/media/Nishtha.d239b2189d4e152db505.jpeg' }}
                    style={styles.image}
                />
                {isHovered && (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => handleLink('https://instagram.com')}>
                            <Text style={styles.buttonText}>Instagram</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => handleLink('https://github.com')}>
                            <Text style={styles.buttonText}>GitHub</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => handleLink('https://linkedin.com')}>
                            <Text style={styles.buttonText}>LinkedIn</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <Text style={styles.memberName}>Nishtha Chitalia</Text>
                <Text style={styles.description}>Guiding with a 'Google heart'...</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
    },
    button: {
        padding: 5,
    },
    buttonText: {
        color: '#4285F4',
    },
    memberName: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    description: {
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});

export default TeamMemberCard;
