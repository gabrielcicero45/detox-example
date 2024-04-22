import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreditCardForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [income, setIncome] = useState(0);

  const handleAddIncome = () => {
    const randomIncome = Math.floor(Math.random() * 10000) + 1000;
    setIncome(randomIncome);
  };

  function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Digite seu nome"
        />
        <Text style={styles.characterCount}>Número de caracteres do nome: {name.length}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          value={formatCPF(cpf)}
          onChangeText={text => setCpf(text)}
          placeholder="Digite seu CPF"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Renda:</Text>
        <Text style={styles.incomeAmount}>{income}</Text>
        <Button title="Gerar Renda" onPress={handleAddIncome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  characterCount: {
    marginBottom: 10,
  },
  singleCharacterInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
    width: 30,
    textAlign: 'center',
  },
  incomeAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CreditCardForm;