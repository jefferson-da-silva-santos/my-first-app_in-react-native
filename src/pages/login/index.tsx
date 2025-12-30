import { useState } from "react";
import { styles } from "./styles";
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    try {
      if (!email || !password) {
        return Alert.alert('Preencha todos os campos');
      }
      console.log(email, password);
            
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}> Bem vindo de volta!</Text>
      </View>

      <View style={styles.boxMid}>

        <Text style={styles.titleinput}>Endereço de email</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Endereço de email" />
          <MaterialIcons color={themas.Colors.gray} name="email" size={24} />
        </View>

        <Text style={styles.titleinput}>Senha</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Senha" secureTextEntry />
          <MaterialIcons color={themas.Colors.gray}  name="remove-red-eye" size={24} />
        </View>
      </View>

      <View style={styles.boxBottom}>
        <TouchableOpacity
        onPress={handleLogin} 
        style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      <Text style={styles.textBottom}>Não tem conta?</Text>
      </View>
    </View>
  );
}