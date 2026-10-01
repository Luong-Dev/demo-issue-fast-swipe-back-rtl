import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useMemo } from "react"
import { Text, View } from "react-native"
import { Drawer } from "react-native-drawer-layout"

import type { DemoTabParamList, RootStackParamList } from "../navigation/types"
import { HomeScreen } from "./HomeScreen"
import { styles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "Shell">

const Tab = createBottomTabNavigator<DemoTabParamList>()

function Placeholder({ label }: { label: string }) {
  return (
    <View style={[styles.screen, styles.home]}>
      <View style={styles.content}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  )
}

export function ShellScreen({ navigation }: Props) {
  const tabs = useMemo(
    () => (
      <Tab.Navigator
        id="BottomTabNavigator"
        screenOptions={{ headerShown: false, freezeOnBlur: false }}
      >
        <Tab.Screen name="Home">
          {() => (
            <HomeScreen
              onOpenSlide={() => navigation.push("SlideFromRightA")}
              onOpenSimple={() => navigation.push("SimplePushA")}
              onOpenSlideDirect={() => navigation.push("SlideFromRightB")}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Categories">{() => <Placeholder label="Categories" />}</Tab.Screen>
        <Tab.Screen name="Cart">{() => <Placeholder label="Cart" />}</Tab.Screen>
      </Tab.Navigator>
    ),
    [navigation],
  )

  return (
    <Drawer
      open={false}
      onOpen={() => undefined}
      onClose={() => undefined}
      drawerType="front"
      renderDrawerContent={() => <Placeholder label="Drawer" />}
    >
      {tabs}
    </Drawer>
  )
}
