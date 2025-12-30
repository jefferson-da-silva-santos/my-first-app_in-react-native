import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import List from "../pages/list";
import BottomRoutes from "./bottom.routes";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator id="root" initialRouteName="Login"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' }
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
