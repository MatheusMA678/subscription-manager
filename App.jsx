import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { useFonts } from "expo-font";
import { Apresentation } from "./src/screens/Apresentation";
import { HeaderButton } from "./src/components/Home/HeaderButton";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function App() {
  const [isLoaded] = useFonts({
    UBold: require("./assets/fonts/Unbounded/Unbounded-Bold.ttf"),
    RHDRegular: require("./assets/fonts/RHDisplay/RedHatDisplay-Regular.ttf"),
    RHDBold: require("./assets/fonts/RHDisplay/RedHatDisplay-Bold.ttf"),
    RHDSemi: require("./assets/fonts/RHDisplay/RedHatDisplay-SemiBold.ttf"),
  });

  if (!isLoaded) return;

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Apresentation">
        <Drawer.Screen
          options={{
            headerShown: false,
          }}
          name="Apresentation"
          component={Apresentation}
        />
        <Drawer.Screen
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#18181C",
            },
            headerTitle: "General",
            headerTitleStyle: {
              color: "white",
              fontFamily: "RHDSemi",
            },
            headerLeft: () => <HeaderButton iconName="menu" />,
            headerRight: () => (
              <HeaderButton iconName="notifications-outline" />
            ),
            headerTitleAlign: "center",
          }}
          name="Home"
          component={Home}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
