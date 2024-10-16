// src/Components/MainScreen.js
import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomePage';
import OurTeam from './OurTeam';
import EventsGallery from './EventsGallery';
import Gallery from './Gallery';
import Navbar from './Navbar';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Team" component={OurTeam} />
        <Stack.Screen name="Events" component={EventsGallery} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
      <Navbar /> {/* Include Navbar here */}
    </View>
  );
};

export default MainScreen;
