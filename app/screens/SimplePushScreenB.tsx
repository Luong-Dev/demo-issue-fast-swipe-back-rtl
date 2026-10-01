import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Pressable, Text, View } from "react-native"

import type { RootStackParamList } from "../navigation/types"
import { styles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "SimplePushB">

export function SimplePushScreenB({ navigation }: Props) {
  return (
    <View style={[styles.screen, styles.simpleB]}>
      <View pointerEvents="none" style={styles.screenIdentity}>
        <Text style={styles.screenIdentityText}>SIMPLE B / ORANGE</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Screen B · simple_push</Text>
        <Text style={styles.subtitle}>
          اسحب من حافة الشاشة، ثم اضغط فوراً على زر العداد في Screen A.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go back using action</Text>
        </Pressable>
      </View>
    </View>
  )
}
