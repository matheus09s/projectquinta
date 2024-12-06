// AjudaScreen.js
import React from 'react';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import TopHeader from '../components/TopHeader';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const AjudaScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6A1B9A" />

      {/* Cabeçalho superior reutilizável */}
      <TopHeader />

      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      {/* Conteúdo principal */}
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>
          Crie ou responda questionários para expressar sua opinião sobre o tema.
        </Text>

        {/* Seção de legendas dos ícones */}
        <View style={styles.iconRow}>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="circle" size={24} color="#FF5722" />
            <Text style={styles.iconText}>Vermelhos</Text>
          </View>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="check-box-outline-blank" size={24} color="#4CAF50" />
            <Text style={styles.iconText}>Verdes</Text>
          </View>
        </View>

        {/* Texto descritivo */}
        <Text style={styles.descriptionText}>
          Questionários vermelhos são criados por usuárias e verdes por organizações parceiras (ONGs, Instituições governamentais...)
        </Text>
        <Text style={styles.descriptionText}>
          Após interagir com o questionário ele ficará no seu perfil para você vê-lo e compartilhá-lo aqui ou em redes sociais.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B1FA2',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.01,
  },
  backText: {
    color: '#fff',
    fontSize: width * 0.04,
    marginLeft: 5,
  },
  contentContainer: {
    flex: 1,
    margin: width * 0.05,
    padding: width * 0.05,
    backgroundColor: '#D1A7E0',
    borderRadius: 10,
  },
  mainText: {
    color: '#fff',
    fontSize: width * 0.045,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: height * 0.02,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: height * 0.02,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: width * 0.035,
    marginTop: height * 0.01,
  },
  descriptionText: {
    color: '#fff',
    fontSize: width * 0.035,
    textAlign: 'center',
    marginVertical: height * 0.01,
  },
});

export default AjudaScreen;
