// src/screens/RegisterAdminScreen.js
import React from 'react';
import {View, Text, TouchableOpacity,ImageBackground,Image} from 'react-native';
import styles from '../styles/MainStyles';

const RegisterAdminScreen = ({route, navigation}) => {
  const {role} = route.params;

  return (
    <ImageBackground 
      source={require('../assets/bground.png')}
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={{color: '#5561d3', fontSize: 24, marginBottom:10}}>Admin Registration</Text>
      <Text style={{color: '#5561d3'}}>
        Registering as: {role}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen', {role})}>
        <Text style={styles.buttonText}>Go to </Text>
        <Image
      style= {styles.button}
      source={require('../assets/login.png')}/>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default RegisterAdminScreen;
