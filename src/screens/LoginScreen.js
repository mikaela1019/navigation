// src/screens/LoginScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert,ImageBackground,Image} from 'react-native';
import styles from '../styles/MainStyles';

const LoginScreen = ({route, navigation}) => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const role = route?.params?.role || 'user';

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {'Content-Type': 'application/json'},
      });

      if (!response.ok) {
        Alert.alert('Login Failed', 'Invalid credentials');
        return;
      }

      const data = await response.json();
      const token = data.token;

      navigation.navigate('HomePageScreen', {
        username,
        role,
        token,
      });
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/bground.png')}  // Replace with your image path
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={{color: '#5561d3', fontSize: 24, marginBottom:30}}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button}
        onPress={handleLogin}>
       <Image
        style={styles.button}
        source={require('../assets/login.png')}/>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default LoginScreen;
