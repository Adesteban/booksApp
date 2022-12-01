import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/core'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { auth } from "../firebase";

import { ToastAndroid } from 'react-native'
import Logo from '../components/Logo'
import Icon from 'react-native-vector-icons/MaterialIcons';



const ForgotPassword = () => { 
    const [email, setEmail] = useState('');
   
    const navigation = useNavigation()
    
    

    const handleForgotPass = () => {
        auth
          .sendPasswordResetEmail(email)
          .then(email => {
            console.log('Registered with:', email);
            ToastAndroid.show('A password reset link has been sent on your email', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            navigation.replace('Login')
          })
          .catch(error => alert(error.message))
      }

    
    return (
        
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        >
        
          
          
        
     
       
        <Logo/>
        <View style={styles.inputContainer}>
        
        <TextInput
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
        >
        </TextInput>
        <Text style={[styles.description]}>Send a password reset link on your email account. </Text>

        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleForgotPass}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        </View>
      
    </KeyboardAvoidingView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    description: {
        padding: 15,
        color: 'gray'
    },
    forgotPassword: {
        width: '80%',
        alignItems: "center",
        paddingTop: 20
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      forgot: {
        fontSize: 13,
        color: 'black',
      },
      link: {
        fontWeight: 'bold',
        color: "#0782F9",
      },
      
  })
