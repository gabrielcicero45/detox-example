import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreditCardForm from './CreditCardForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={CreditCardForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;