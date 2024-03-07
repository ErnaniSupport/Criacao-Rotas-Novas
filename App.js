import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../ConfigRotas/screens/HomeScreen';
import LoginScreen from '../ConfigRotas/screens/LoginScreen';
import CadastroScreen from '../ConfigRotas/screens/CadastroScreen';
import ContatoScreen from '../ConfigRotas/screens/ContatoScreen';
import lista from '../ConfigRotas/screens/lista';
import AlterarExcluirScreen from './screens/AlterarExcluirScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro de Usuario" component={CadastroScreen} />
        <Stack.Screen name="Cadastro de Contato" component={ContatoScreen} />
        <Stack.Screen name="Lista de Contato" component={lista} />
        <Stack.Screen name="Contato Alterar/Excluir" component={AlterarExcluirScreen} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
