// components/TopHeader.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const TopHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topHeader}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/opexp.png')} style={styles.logo} />
      </View>

      {/* Divisor */}
      <View style={styles.divider} />

      {/* Botão "Criar um questionário" */}
      <TouchableOpacity style={styles.topButton}>
        <Ionicons name="add-circle" size={width * 0.05} color="#fff" />
        <Text style={styles.topButtonText}>Criar questionário</Text>
      </TouchableOpacity>

      {/* Botão "Ajuda" */}
      <TouchableOpacity 
        style={styles.topButton}
        onPress={() => navigation.navigate('Ajuda')}
      >
        <Ionicons name="help-circle" size={width * 0.05} color="#fff" />
        <Text style={styles.topButtonText}>Ajuda</Text>
      </TouchableOpacity>

      {/* Botão "Minha conta" */}
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Conta')}
      >
        <Image source={require('../assets/icone.png')} style={styles.profileImage} />
        <Text style={styles.topButtonText}>Minha conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: height * 0.02,
    backgroundColor: '#4A148C',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  logo: {
    width: width * 0.20,
    height: width * 0.15,
  },
  divider: {
    width: 1,
    height: '70%',
    backgroundColor: '#fff',
  },
  topButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  topButtonText: {
    color: '#fff',
    fontSize: width * 0.03,
    marginTop: 4,
    textAlign: 'center',
  },
  profileButton: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default TopHeader;
