import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Pressable, Text, View } from "react-native"

import type { RootStackParamList } from "../navigation/types"
import { styles } from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "SlideFromRightB">

export function SlideFromRightScreenB({ navigation }: Props) {
  return (
    <View style={[styles.screen, styles.slideB]}>
      <View pointerEvents="none" style={styles.screenIdentity}>
        <Text style={styles.screenIdentityText}>PDP / MAGENTA</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>PDP · slide_from_right</Text>
        <Text style={styles.subtitle}>
          اسحب بسرعة من الحافة الفعلية للشاشة. كرر العملية عدة مرات لملاحظة الوميض.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go back using action</Text>
        </Pressable>
      </View>
    </View>
  )
}
