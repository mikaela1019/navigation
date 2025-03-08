// src/screens/RegisterScreen.js
import React from 'react';
import {View, Text, TextInput, TouchableOpacity,Image,ImageBackground} from 'react-native';
import styles from '../styles/MainStyles';

const RegisterScreen = ({navigation}) => {
  const navigateToAdmin = () => {
    navigation.navigate('RegisterAdminScreen', {role: 'admin'});
  };

  return (
    <ImageBackground 
      source={require('../assets/bground.png')}  // Replace with your image path
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={{color: '#5561d3', fontSize: 24, marginBottom:10}}>Register</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}>
        <Image
      style={styles.button}
      source={require('../assets/register.png')}/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={navigateToAdmin}>
        <Image
      style={styles.button}
      source={require('../assets/admin.png')}/>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
