// screens/ResetPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Redefinir Senha</Text>
      <Text style={styles.instructionText}>
        Insira o seu email para receber instruções de redefinição de senha.
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#B0B0B0"
        value={email}
        onChangeText={setEmail}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructionText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 12,
    width: '100%',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#8A8A8A',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: '45%',
  },
  resetButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    width: '45%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ResetPasswordScreen;
