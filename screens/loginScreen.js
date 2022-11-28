import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from "../firebase";
import { ToastAndroid} from 'react-native'
import Logo from '../components/Logo'



const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
              navigation.replace("Explore")
            }
          })

          return unsubscribe
    }, [])

    

      const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            ToastAndroid.show('Hi, ' + user.email, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            console.log('Logged in with:', user.email);
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

        <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
