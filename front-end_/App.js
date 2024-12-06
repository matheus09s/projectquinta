// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import QuestionarioScreen from './screens/QuestionarioScreen';
import ContaScreen from './screens/ContaScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import QuestionarioDetalhes from './screens/QuestionarioDetalhes';
import AjudaScreen from './screens/AjudaScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionario"
          component={QuestionarioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Conta"
          component={ContaScreen}
          options={{ title: 'Minha Conta', headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ title: 'Redefinir Senha', headerShown: false }}
        />
        <Stack.Screen
          name="QuestionarioDetalhes"
          component={QuestionarioDetalhes}
          options={({ route }) => ({
            title: route.params?.titulo || 'Detalhes do Questionário',
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Ajuda"
          component={AjudaScreen} 
          options={{
            title: 'Ajuda',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
