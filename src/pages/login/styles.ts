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
    backgroundColor: "green",
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
    marginTop: 20
  },
  inputContainer: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themas.Colors.lightGray,
    borderColor: themas.Colors.lightGray
  },
  input : {
    height: "100%",
    borderRadius: 40,
    width: "90%",
    paddingHorizontal: 5,
  }
});
