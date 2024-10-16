// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import HomePage from './src/Components/HomePage';
import Gallery from './src/Components/Gallery';
import EventsGallery from './src/Components/EventsGallery';
import OurTeam from './src/Components/OurTeam';
import Navbar from './src/Components/Navbar';

// Create the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen name='Team' component={OurTeam} />
          <Stack.Screen name='Events' component={EventsGallery} />
          <Stack.Screen name='Gallery' component={Gallery} />
        </Stack.Navigator>

        {/* Include the Navbar here */}
        <Navbar />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
