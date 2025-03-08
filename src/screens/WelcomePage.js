// src/screens/WelcomePage.js

import React from 'react';
import {View, Text, TouchableOpacity,ImageBackground, Image} from 'react-native';
import styles from '../styles/MainStyles';

const WelcomePage = ({navigation}) => {
  return (
    <ImageBackground 
      source={require('../assets/bground.png')}  // Replace with your image path
      style={styles.background}
    >
    <View style={styles.container}>
      <Image
      style= {styles.Imagecontainer}
      source={require('../assets/meow.png')}/>

      {/* Login Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}>
        <Image
      style= {styles.button}
      source={require('../assets/login.png')}/>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Image
      style={styles.button}
      source={require('../assets/register.png')}/>
      </TouchableOpacity>

      {/* Register as Admin Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterAdminScreen', {role: 'admin'})}>
        <Image
      style={styles.button}
      source={require('../assets/admin.png')}/>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default WelcomePage;
