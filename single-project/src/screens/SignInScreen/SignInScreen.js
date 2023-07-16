

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
        if (username.trim() === '') {
      setError('Username is required');
      return;
    }
    if (password.trim() === '') {
      setError('Password is required');
      return;
    }

    if (username === 'Admin' && password === '123456789') {
      navigation.navigate('HomeScreen');
    } else {
      setError('Ntakintu na kimwe ufite kikwemerera kwinjira hano');
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Login Here</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <CustomButton text="Sign In" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  text: {
    color: 'green',
    fontSize: 30,
    padding: 20,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SignInScreen;
