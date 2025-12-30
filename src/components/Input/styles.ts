import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    backgroundColor: themas.Colors.lightGray,
    borderColor: themas.Colors.lightGray,
  },
  input: {
    flex: 1,
    height: "100%",
    borderRadius: 40,
    width: "90%",
    paddingHorizontal: 10,
  },
  titleinput: {
    marginLeft: 5,
    color: themas.Colors.gray,
    textTransform: "uppercase",
    marginTop: 20,
  },
  
});