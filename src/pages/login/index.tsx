import { useState } from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import Logo from '../../assets/logo.png';
import { themas } from "../../global/themes";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      return Alert.alert('Preencha todos os campos');
    }

    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      Alert.alert('Login realizado com sucesso!');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.boxTop}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}> Bem vindo de volta!</Text>
      </View>

      <View style={styles.boxMid}>

        <Input
          label="Endereço de email"
          value={email}
          onChangeText={setEmail}
          placeholder="Endereço de email"
          icon="email"
        />

        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={true}
          icon="remove-red-eye"
        />
      </View>

      <View style={styles.boxBottom}>
        <Button
          handleLogin={handleLogin}
          loading={loading}
          textButton="Entrar"
        />
      <Text style={styles.textBottom}>Não tem conta?</Text>
      </View>
    </View>
  );
}