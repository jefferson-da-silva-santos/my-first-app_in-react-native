import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: themas.Colors.primary,
    width: "100%",
    maxWidth: 200,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 40,
    color: themas.Colors.secondary,
    boxShadow: "2px 2px 2px 1px #00000015",
  },
  textButton: {
    color: themas.Colors.secondary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  }
});