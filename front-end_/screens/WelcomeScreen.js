// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Bem-Vinda!</Text>
      <Text style={styles.subtitle}>
        O opinião expressa visa aumentar a voz das mulheres por meio de dados fornecidos por vocês!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>➔</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>By: Vortex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8A2BE2',
  },
  logoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 30,
    borderWidth: 4,
    borderColor: '#FFF', 
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#8A2BE2',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    color: '#FFF',
    fontSize: 14,
  },
});

export default WelcomeScreen;
