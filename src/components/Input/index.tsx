import React from 'react'
import { styles } from './styles';
import { Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry = false, icon }) => {
  return (
    <>
      <Text style={styles.titleinput}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder} />
        <MaterialIcons 
          color={themas.Colors.gray} 
          name={icon}
          size={24}
         />
      </View>
    </>
  )
}

export default Input