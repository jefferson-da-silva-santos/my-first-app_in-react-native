import Reactc from "react";
import { styles } from "./styles";
import { View, Text, StatusBar, Image, TextInput } from "react-native";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {
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
            placeholder="Endereço de email" />
          <MaterialIcons color={themas.Colors.gray} name="email" size={24} />
        </View>

        <Text style={styles.titleinput}>Senha</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha" secureTextEntry />
          <MaterialIcons color={themas.Colors.gray}  name="remove-red-eye" size={24} />
        </View>
      </View>

      <View style={styles.boxBottom}>
        
      </View>

    </View>
  );
}