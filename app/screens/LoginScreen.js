import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/bb_app_icon_o.png')}
        />
        <Text style={styles.title}>Beer Bulletins</Text>
      </View>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('TabNavigationRoutes')}
      >
        <Text style={styles.submitButtonText}>Sign in!</Text>
      </TouchableOpacity>
      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        New Here ? Register
      </Text>
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
  input: {
    margin: 15,
    height: 40,
    borderColor: '#2F4858',
    borderWidth: 1,
    backgroundColor: '#DEFBFA',
  },
  submitButton: {
    backgroundColor: '#F26419',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;
