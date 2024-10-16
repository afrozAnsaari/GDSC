// src/components/CoreMemberssGallery.js
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Linking } from 'react-native';

// Dummy CoreMembers data; replace with import from your data file.
const CoComm = [
    {
        id: 1,
        name: "Lakshitaa Chellaramani",
        desc: "passionate learner and a staunch believer in hard work",
        image: require('./laksh.jpg'),
        insta: "https://www.instagram.com/lakshitaa.xo/",
        linkedIn: 'https://www.linkedin.com/in/lakshitaa-chellaramani-68254224b/'
    },
    {
        id: 2,
        name: "Divy Arun Mav",
        desc: "MERN-Stack Developer | Blockchain Enthusiast",
        image: require('./divy.png'),
        insta: 'https://www.instagram.com/divy_mav',
        linkedIn: 'https://www.instagram.com/divy_mav'
    }
];

const CoreMembers = [
    {
        id: 3,
        name: "Nishtha Chitalia",
        role: "Our GDSC Lead",
        desc: "Guiding with a 'Google heart' and coding with a 'developer mind,' I'm not just a lead – I'm your architect of innovation. As a committee builder, I weave collaboration into code and turn challenges into opportunities. Let's code a future where creativity knows no limits, and every line is an adventure in building something extraordinary together.",
        image: require('./nishitha.jpeg'),
        insta: 'https://www.instagram.com/chitalianishtha',
        linkedIn: 'https://www.linkedin.com/in/nishtha-chitalia/'
    },
    {
        id: 4,
        name: "Aryan Gupta",
        role: "Our Secretary",
        desc: "Hello there! As the secretary of GDSC, I thrive on keeping things organized and ensuring smooth communication within our tech community. Excited to contribute to our journey of innovation and growth!",
        image: require('./aryan.jpeg'),
        insta: 'https://www.instagram.com/_aryangpt/',
        linkedIn: 'www.linkedin.com/in/aryan-gupta-0a348522a'
    }
];

const { width } = Dimensions.get('window');

export default function OurTeam() {
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {CoreMembers.map((CoreMembers) => (
                    <View key={CoreMembers.CoreId} style={styles.squircleTab}>
                        <Image source={CoreMembers.image} style={styles.CoreMembersImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{CoreMembers.name}</Text>
                            <Text style={styles.role}>{CoreMembers.role}</Text>
                            {/* <Text style={styles.date}>{CoreMembers.date}</Text> */}
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => openLink(CoreMembers.insta)} style={styles.button}>
                                <Image source={require('./file2.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => openLink(CoreMembers.linkedIn)} style={styles.button}>
                                <Image source={require('./file.png')} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                {CoComm.map((CoComm) => (
                    <View key={CoComm.CoId} style={styles.squircleTab}>
                        <Image source={CoComm.image} style={styles.CoreMembersImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.name}>{CoComm.name}</Text>
                            <Text style={styles.role}>{CoComm.role}</Text>
                            {/* <Text style={styles.date}>{CoreMembers.date}</Text> */}
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => openLink(CoComm.insta)} style={styles.button}>
                                <Image source={require('./file2.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => openLink(CoComm.linkedIn)} style={styles.button}>
                                <Image source={require('./file.png')} style={styles.icon} />
                            </TouchableOpacity>
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
        backgroundColor: 'transparent',
        position: 'relative',
    },
    CoreMembersImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 50, // Adjust the bottom space to leave room for the buttons
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)', // Fully transparent
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    role: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    buttonContainer: {
        padding: 10,
        position: 'absolute',
        bottom: 10,
        left: "10%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%', // Adjust the width of the button container
        backgroundColor: 'rgba(255, 255, 255, 0)', // Semi-transparent background for buttons
        paddingVertical: 5, // Reduced padding
        paddingHorizontal: 10, // Reduced padding
        borderRadius: 5
    },
    button: {
        backgroundColor: 'transparent',
        padding: 15,
        marginHorizontal: 10, // Space between buttons
        borderRadius: 5
    },
    icon: {
        width: 30, // Reduced size for icons
        height: 30, // Reduced size for icons
        // backgroundColor: 'rgba(255,255,255,0)'
        opacity: 1
    },
});
