import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopHeader from '../components/TopHeader';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const questionarios = [
  { id: '1', titulo: 'Questionário sobre Saúde', views: '1.3M', comments: '800mil' },
  { id: '2', titulo: 'Questionário sobre Educação', views: '600mil', comments: '250mil' },
  { id: '3', titulo: 'Questionário sobre Tecnologia', views: '500mil', comments: '100mil' },
];

const QuestionarioScreen = () => {
  const navigation = useNavigation();

  const renderQuestionario = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('QuestionarioDetalhes', { titulo: item.titulo })}
      style={styles.questionarioCard}
    >
      <Text style={styles.cardTitulo}>{item.titulo}</Text>
      <Text style={styles.cardDescricao}>
        Participe deste questionário e compartilhe suas opiniões sobre {item.titulo.toLowerCase()}.
      </Text>
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
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6A1B9A" />

      <TopHeader />

      {/* Campo de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar um questionário"
          placeholderTextColor="#7B1FA2"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>
          Responda ou crie questionários para interagir com seu público alvo!
        </Text>
        <Text style={styles.welcomeText}>Compartilhe seus interesses nas redes sociais!</Text>
      </View>

      <Text style={styles.sectionTitle}>Questionários em Destaque</Text>
      <FlatList
        data={questionarios}
        keyExtractor={(item) => item.id}
        renderItem={renderQuestionario}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A1B9A',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1A7E0',
    borderRadius: 25,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.005,
  },
  searchInput: {
    flex: 1,
    color: '#7B1FA2',
    fontSize: width * 0.04,
  },
  searchButton: {
    padding: width * 0.02,
    backgroundColor: '#7B1FA2',
    borderRadius: 50,
  },
  welcomeSection: {
    padding: width * 0.05,
  },
  welcomeText: {
    color: '#fff',
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.015,
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
  cardDescricao: {
    fontSize: width * 0.035,
    color: '#666',
    marginBottom: height * 0.01,
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
  listContainer: {
    paddingBottom: height * 0.02,
  },
});

export default QuestionarioScreen;
