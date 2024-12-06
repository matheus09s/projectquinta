// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('login');

  // Estados para armazenar dados do formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  // Função para realizar o login e enviar dados ao backend
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Senha: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Login bem-sucedido', `Bem-vindo, ${data.nome}!`);
        navigation.navigate('Questionario');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro no login', errorData.message || 'Verifique suas credenciais.');
      }
    } catch (error) {
      Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor. Verifique se ele está ativo.');
    }
  };

  // Função para realizar o registro e enviar dados ao backend
  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Cpf: cpf,
          Senha: password,
        }),
      });

      if (response.ok) {
        Alert.alert('Cadastro bem-sucedido', 'Sua conta foi criada com sucesso!');
        setSelectedTab('login');
      } else {
        const errorData = await response.json();
        Alert.alert('Erro no cadastro', errorData.message || 'Não foi possível concluir o cadastro.');
      }
    } catch (error) {
      Alert.alert('Erro de conexão', 'Não foi possível conectar ao servidor. Verifique se ele está ativo.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.headerText}>Para continuar se identifique:</Text>

      {/* Abas para alternar entre Login e Cadastro */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab('login')}>
          <Text style={[styles.tabText, selectedTab === 'login' && styles.activeTab]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('signup')}>
          <Text style={[styles.tabText, selectedTab === 'signup' && styles.activeTab]}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>

      {/* Linha divisória */}
      <View style={styles.divider} />

      {/* Conteúdo dinâmico baseado na aba selecionada */}
      {selectedTab === 'login' ? (
        // Tela de Login
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="insira seu e-mail/cpf"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="insira sua senha"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.forgotPassword}>esqueci minha senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Entrar ➔</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Tela de Cadastro
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Cpf"
            placeholderTextColor="#B0B0B0"
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      )}
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
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tabText: {
    fontSize: 18,
    color: '#AAA',
    marginHorizontal: 10,
  },
  activeTab: {
    color: '#FFF',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#FFF',
    width: '80%',
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    width: '100%',
  },
  forgotPassword: {
    color: '#4B0082',
    textAlign: 'right',
    width: '100%',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#4B0082',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default LoginScreen;
