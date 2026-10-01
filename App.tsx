import "react-native-gesture-handler";

import { I18nManager } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import { enableFreeze, enableScreens } from "react-native-screens";
import { StatusBar } from "expo-status-bar";

import { RootNavigator } from "./app/navigation/RootNavigator";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
enableScreens(true);
enableFreeze(false);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar style="dark" />
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
