import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  tabArea: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItemButtom: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
    top: -30,
    backgroundColor: themas.Colors.primary
  }
});