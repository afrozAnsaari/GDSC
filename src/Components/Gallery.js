import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, SafeAreaView, Text } from 'react-native';

const images = [
    require('./gallery1.jpg'),
    require('./gallery2.jpg'),
    require('./gallery3.jpeg'),
    require('./gallery4.jpeg')
];

const { width } = Dimensions.get('window');

export default function Gallery() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {images.map((image, index) => (
                    <View key={index} style={styles.squircleTab}>
                        <Image source={image} style={styles.image} />
                        <View>
                            <Text style={styles.overlayText}>Hello!</Text>
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
        backgroundColor: '#ecf0f1',
    },
    scrollContainer: {
        paddingVertical: 10,
        alignItems: 'center',
        paddingBottom: 70
    },
    squircleTab: {
        width: width * 0.8, // 80% of screen width
        height: 200, // Fixed height
        marginVertical: 10, // Spacing between tabs
        borderRadius: 30, // Squircle effect (rounded corners)
        overflow: 'hidden', // Ensure image fits inside rounded borders
        elevation: 5, // Shadow on Android
        shadowColor: '#000', // Shadow color on iOS
        shadowOffset: { width: 0, height: 5 }, // Shadow offset on iOS
        shadowOpacity: 0.2, // Shadow opacity on iOS
        shadowRadius: 10, // Blur radius for iOS shadow
        backgroundColor: '#fff', // Background for squircle
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensure the image covers the squircle evenly
    },
    textOverlay: {
        position: 'absolute', // Position text on top of the image
        bottom: 10, // Position text near the bottom
        left: 10, // Adjust left position
        right: 10, // Adjust right position
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
    },
    overlayText: {
        color: '#fff', // Text color
        fontSize: 16, // Adjust font size as needed
        fontWeight: 'bold', // Make text bold
        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Optional: shadow for better visibility
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset
        textShadowRadius: 2, // Shadow blur radius
    },
});
