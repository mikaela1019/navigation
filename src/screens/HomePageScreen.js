// src/screens/HomePageScreen.js
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image, ImageBackground,TouchableOpacity} from 'react-native';
import styles from '../styles/MainStyles';

const HomePageScreen = ({route, navigation}) => {
  const {username, role, token} = route.params;

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Failed to fetch employees', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#6c63ff" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/bground.png')} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.centeredContainer}>
        <Text style={[styles.titleText, {marginBottom: 15}]}>
          Welcome {username} ({role})
        </Text>

        <FlatList
          data={employees}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          renderItem={({item}) => (
            <View style={{alignItems: 'center', marginVertical: 5}}>
              <Text style={{color: '#5561d3'}}>{item.name.firstname} {item.name.lastname}</Text>
            </View>
          )}
        />
        <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
          <Image
            style={styles.button}
            source={require('../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomePageScreen;