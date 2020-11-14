import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/bb_app_icon_o.png')}
        />
        <Text style={styles.title}>Beer Bulletins</Text>
      </View>
      <TextInput placeholder='Username' />
      <TextInput placeholder='Password' />
    </View>
  );
}

// use fetch to fetch pc's ip address fetch('http://yourPCip:3000/users')
//       .then(response => response.json())
//       .then(users => console.warn(users))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17BEBB',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#F6AE2D',
  },
});

export default LoginScreen;
