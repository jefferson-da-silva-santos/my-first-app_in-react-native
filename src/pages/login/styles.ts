import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    height: Dimensions.get("window").height / 3,
  },
  boxMid: {
    width: "100%",
    height: Dimensions.get("window").height / 4,
    paddingHorizontal: 37,
  },
  boxBottom: {
    width: "100%",
    height: Dimensions.get("window").height / 3,
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo: {
    width: 80,
    height: 80,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  titleinput: {
    marginLeft: 5,
    color: themas.Colors.gray,
    textTransform: "uppercase",
    marginTop: 20,
  },
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
  button: {
    backgroundColor: themas.Colors.primary,
    width: "100%",
    paddingHorizontal: 60,
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
  },
  textBottom: {
    color: themas.Colors.gray,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
