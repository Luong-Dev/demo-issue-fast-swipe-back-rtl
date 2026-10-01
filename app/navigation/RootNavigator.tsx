import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import { ShellScreen } from "../screens/ShellScreen";
import { SimplePushScreenA } from "../screens/SimplePushScreenA";
import { SimplePushScreenB } from "../screens/SimplePushScreenB";
import { SlideFromRightScreenA } from "../screens/SlideFromRightScreenA";
import { SlideFromRightScreenB } from "../screens/SlideFromRightScreenB";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Shell"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "red" },
          animation: "slide_from_right",
          fullScreenGestureEnabled: false,
          freezeOnBlur: false,
        }}
      >
        <Stack.Screen
          name="Shell"
          component={ShellScreen}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name="SlideFromRightA"
          component={SlideFromRightScreenA}
        />
        <Stack.Screen
          name="SlideFromRightB"
          component={SlideFromRightScreenB}
        />
        <Stack.Screen name="SimplePushA" component={SimplePushScreenA} />
        <Stack.Screen
          name="SimplePushB"
          component={SimplePushScreenB}
          options={{ animation: "simple_push" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
