import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

import type { RootStackParamList } from "../navigation/types"
import { styles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "SimplePushA">

export function SimplePushScreenA({ navigation }: Props) {
  const [pressCount, setPressCount] = useState(0)

  return (
    <View style={[styles.screen, styles.simpleA]}>
      <View pointerEvents="none" style={styles.screenIdentity}>
        <Text style={styles.screenIdentityText}>SIMPLE A / GREEN</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Screen A · simple_push</Text>
        <Text style={styles.subtitle}>
          بعد الرجوع بالسحب، اضغط فوراً على العداد للتحقق من استقبال أول ضغطة.
        </Text>
        <Text style={styles.count}>Immediate press count: {pressCount}</Text>
        <Pressable style={styles.button} onPress={() => setPressCount((count) => count + 1)}>
          <Text style={styles.buttonText}>Press immediately after swipe-back</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate("SimplePushB")}
        >
          <Text style={styles.buttonText}>Open Screen B</Text>
        </Pressable>
      </View>
    </View>
  )
}
