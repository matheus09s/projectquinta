// ContaScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopHeader from '../components/TopHeader';

const { width, height } = Dimensions.get('window');

// Dados de exemplo
const meusQuestionarios = [
  { id: '1', titulo: 'Questionário de Ciências', views: '200mil', comments: '30mil' },
  { id: '2', titulo: 'Questionário de História', views: '150mil', comments: '20mil' },
  { id: '3', titulo: 'Questionário de Matemática', views: '100mil', comments: '10mil' },
];

const questionariosInteragidos = [
  { id: '4', titulo: 'Questionário de Geografia', views: '250mil', comments: '50mil' },
  { id: '5', titulo: 'Questionário de Literatura', views: '300mil', comments: '40mil' },
];

const usuarioPerfil = {
  nome: 'Maria Souza',
  email: 'maria.souza@gmail.com',
  cpf: '123.456.789-10',
  nascimento: '10/05/1990',
  moedas: 150,
};

const ContaScreen = ({ navigation }) => {
  const renderQuestionario = (item) => (
    <View style={styles.questionarioCard} key={item.id}>
      <Text style={styles.cardTitulo}>{item.titulo}</Text>
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Ionicons name="eye" size={18} color="#4CAF50" />
          <Text style={styles.statText}>{item.views}</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="chatbubble" size={18} color="#9C27B0" />
          <Text style={styles.statText}>{item.comments}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6A1B9A" />

      {/* Top Header */}
      <TopHeader />

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>

      {/* Conteúdo ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Seu Perfil */}
        <View style={styles.perfilContainer}>
          <Text style={styles.perfilTitulo}>Seu Perfil</Text>
          <Text style={styles.perfilItem}><Text style={styles.perfilLabel}>Nome:</Text> {usuarioPerfil.nome}</Text>
          <Text style={styles.perfilItem}><Text style={styles.perfilLabel}>Email:</Text> {usuarioPerfil.email}</Text>
          <Text style={styles.perfilItem}><Text style={styles.perfilLabel}>CPF:</Text> {usuarioPerfil.cpf}</Text>
          <Text style={styles.perfilItem}><Text style={styles.perfilLabel}>Data de Nascimento:</Text> {usuarioPerfil.nascimento}</Text>
          <Text style={styles.perfilItem}><Text style={styles.perfilLabel}>Moedas:</Text> {usuarioPerfil.moedas}</Text>
        </View>

        {/* Meus Questionários */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus Questionários</Text>
        </View>
        {meusQuestionarios.map(renderQuestionario)}

        {/* Questionários que você interagiu */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Questionários que você interagiu</Text>
        </View>
        {questionariosInteragidos.map(renderQuestionario)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A1B9A',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  voltarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: width * 0.05,
  },
  voltarText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: width * 0.04,
  },
  scrollContainer: {
    paddingBottom: height * 0.02,
  },
  perfilContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: width * 0.05,
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },
  perfilTitulo: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  perfilItem: {
    fontSize: width * 0.04,
    marginVertical: height * 0.005,
  },
  perfilLabel: {
    fontWeight: 'bold',
  },
  sectionHeader: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    backgroundColor: '#7B1FA2',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  questionarioCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: width * 0.04,
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.01,
  },
  cardTitulo: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.005,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 5,
    fontSize: width * 0.035,
    color: '#666',
  },
});

export default ContaScreen;
