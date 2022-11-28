import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/core'
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from "../firebase";

import { ToastAndroid} from 'react-native'
import Logo from '../components/Logo'
import Icon from 'react-native-vector-icons/FontAwesome';



const RegistrationScreen = () => {
    
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()
    
    

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
            ToastAndroid.show('Successfully registered user', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
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
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
        >

        </TextInput>
        <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
        >

        </TextInput>
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry>

        </TextInput>

        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
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
      marginTop: 40,
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
