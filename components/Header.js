import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Header = (props) => {
    return (
        <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
       </View>
    );
};


Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
  header: {
    height:60,
    padding:15,
    backgroundColor:'#4FFBDF',
    borderColor:'#D13A28',
  },
  text:{
      color:'#C34A36',
      fontSize: 20,
      textAlign:'center',
      
  }
});

export default Header;