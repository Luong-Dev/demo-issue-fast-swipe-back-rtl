import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Pressable, Text, View } from "react-native"

import type { RootStackParamList } from "../navigation/types"
import { styles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "SlideFromRightA">

export function SlideFromRightScreenA({ navigation }: Props) {
  return (
    <View style={[styles.screen, styles.slideA]}>
      <View pointerEvents="none" style={styles.screenIdentity}>
        <Text style={styles.screenIdentityText}>LISTING / CYAN</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Listing · slide_from_right</Text>
        <Text style={styles.subtitle}>
          هذه هي شاشة الوجهة. راقب ما إذا ظهرت شاشة PDP مرة أخرى لفترة قصيرة أثناء الرجوع.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate("SlideFromRightB")}>
          <Text style={styles.buttonText}>Open PDP</Text>
        </Pressable>
      </View>
    </View>
  )
}
