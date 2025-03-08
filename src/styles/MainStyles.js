// src/styles/MainStyle.js

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
   },
Imagecontainer: {
    marginTop: 15,
    height:'80',
    width:'100',
 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '280',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom:10,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    height:'60',
    width:'170',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
centeredContainer: {
    flex: 1,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#5561d3',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListContent: {
    alignItems: 'center', 
    width: '100%',
  },
 
});
