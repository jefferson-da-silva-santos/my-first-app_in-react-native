import { ActivityIndicator, Text, TouchableOpacity } from "react-native"
import { themas } from "../../global/themes"
import { styles } from "./styles"

export const Button = ({ handleLogin, loading, textButton }) => {
  return (
    <TouchableOpacity
      onPress={handleLogin}
      style={styles.button}>{
        loading ? (
          <ActivityIndicator color={themas.Colors.secondary} />
        ) : (
          <Text style={styles.textButton}>{textButton}</Text>
        )
      }
    </TouchableOpacity>
  )
}