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
  textBottom: {
    color: themas.Colors.gray,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
