import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/bb_mobile_wp.png')}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      >
        <View style={styles.loginButton}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.RegisterButton}>
          <Text>Register</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#2F4858',
  },
  RegisterButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#33658A',
  },
});

export default WelcomeScreen;
