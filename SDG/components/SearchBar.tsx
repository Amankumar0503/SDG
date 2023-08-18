import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SearchBar() {
  return (
    <View style={styles.box}>
    <Text style={styles.searchtext}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
        marginVertical: '2%',
        borderRadius: 25,
        backgroundColor: '#fafafa',
        width: '80%',
        marginHorizontal: '10%',
        height: 50,
    },
    searchtext: {
        flex: 1,
        color: 'grey',
        fontSize:24,
        marginVertical: '2%',
        marginHorizontal: '3%',
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems: 'center',

    },
});
