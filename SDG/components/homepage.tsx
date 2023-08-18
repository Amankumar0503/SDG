import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';
import Carousel from './Carousel';

export default function Homepage() {
  return (
    <>
      <View>
        <View style={styles.header}>
          <Image source={require('../images/logo.jpeg')} style={styles.logo}/>
          <Text style={styles.headingText}>RightRoute</Text>
        </View>
        <View>
          <SearchBar/>
        </View>
        <View>
          <Carousel/>
        </View>
        <View>
          <Text>categories1</Text>
          <Text>categories2</Text>
          <Text>categories3</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems : 'center' ,
    margin: '2%',
    paddingVertical :'5%',
    paddingHorizontal: '5%',
    backgroundColor: '#0874F9',
    borderRadius: 10,
    },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 45,
    height: 45,
  },
});
