import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginScreen';
import HomeScreen from './screens/homeScreen';
import RegistrationScreen from './screens/registrationScreen';
import DetailsScreen from './screens/DetailsScreen';
import ForgotPassword from './screens/forgotPassScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pdf from './screens/readPdf';





const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#0782F9" translucent = {true}/>
      
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegistrationScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Explore" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{ headerShown: false }} name="Pdf" component={Pdf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});