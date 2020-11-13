import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

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
    </View>
  );
}

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
