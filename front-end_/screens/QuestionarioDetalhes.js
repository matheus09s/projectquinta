// screens/QuestionarioDetalhes.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TopHeader from '../components/TopHeader';

const { width, height } = Dimensions.get('window');

const perguntas = [
  { id: '1', texto: 'Lorem ipsum dolor sit amet', responded: true },
  { id: '2', texto: 'eiusmod', responded: true },
  { id: '3', texto: 'velit esse cillum dolore eu fugiat', responded: false },
  { id: '4', texto: 'non proident, sunt in culpa qui officia', responded: false },
];

const QuestionarioDetalhes = () => {
  const navigation = useNavigation();
  const [respostas, setRespostas] = useState({});

  const handleInputChange = (id, text) => {
    setRespostas((prevState) => ({ ...prevState, [id]: text }));
  };

  const handleEnviarRespostas = () => {
    console.log('Respostas enviadas:', respostas);
    alert('Respostas enviadas com sucesso!');
    navigation.navigate('Questionario');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6A1B9A" />

      {/* Top Header */}
      <TopHeader />

      {/* Header com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Voltar</Text>
      </View>

      {/* Título e subtítulo */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Duis auteirure</Text>
        <Text style={styles.subtitle}>reprehenderit</Text>
      </View>

      {/* Formulário de perguntas */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        {perguntas.map((pergunta) => (
          <View
            key={pergunta.id}
            style={[
              styles.inputContainer,
              { backgroundColor: pergunta.responded ? '#C8E6C9' : '#FFCDD2' },
            ]}
          >
            <Text style={styles.perguntaTexto}>{pergunta.texto}</Text>
            <TextInput
              style={styles.input}
              placeholder="Value"
              placeholderTextColor="#888"
              onChangeText={(text) => handleInputChange(pergunta.id, text)}
              value={respostas[pergunta.id] || ''}
            />
          </View>
        ))}
      </ScrollView>

      {/* Botão de enviar */}
      <TouchableOpacity style={styles.enviarButton} onPress={handleEnviarRespostas}>
        <Text style={styles.enviarButtonText}>Enviar Respostas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#388E3C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    backgroundColor: '#AB47BC',
  },
  headerText: {
    color: '#000',
    fontSize: width * 0.04,
    marginLeft: width * 0.02,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  mainTitle: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#212121',
  },
  subtitle: {
    fontSize: width * 0.05,
    color: '#555',
  },
  formContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.02,
  },
  inputContainer: {
    borderRadius: 10,
    padding: width * 0.04,
    marginBottom: height * 0.02,
  },
  perguntaTexto: {
    fontSize: width * 0.04,
    color: '#212121',
    marginBottom: height * 0.005,
  },
  input: {
    height: height * 0.05,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    fontSize: width * 0.04,
    color: '#000',
  },
  enviarButton: {
    backgroundColor: '#6A1B9A',
    borderRadius: 10,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  enviarButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default QuestionarioDetalhes;
