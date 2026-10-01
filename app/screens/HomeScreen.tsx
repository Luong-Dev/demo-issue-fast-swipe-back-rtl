import { I18nManager, Pressable, Text, View } from "react-native"

import { styles } from "./styles"

type Props = {
  onOpenSlide: () => void
  onOpenSimple: () => void
  onOpenSlideDirect: () => void
}

export function HomeScreen({ onOpenSlide, onOpenSimple, onOpenSlideDirect }: Props) {
  return (
    <View style={[styles.screen, styles.home]}>
      <View pointerEvents="none" style={styles.screenIdentity}>
        <Text style={styles.screenIdentityText}>HOME / PURPLE</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.directionBadge}>
          <Text style={styles.directionBadgeText}>
            {I18nManager.isRTL ? "RTL ACTIVE" : "RTL REQUIRES RESTART"}
          </Text>
        </View>

        <Text style={styles.title}>اختبار الرجوع بالسحب في RTL</Text>
        <Text style={styles.subtitle}>
          افتح أحد الاختبارين، ثم اسحب بسرعة من الحافة الفعلية للشاشة. يجب إغلاق التطبيق
          وفتحه مرة أخرى بعد أول تشغيل لتفعيل RTL.
        </Text>

        <Pressable style={styles.button} onPress={onOpenSlide}>
          <Text style={styles.buttonText}>Listing → PDP · slide_from_right</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.secondaryButton]} onPress={onOpenSlideDirect}>
          <Text style={styles.buttonText}>Tab shell → PDP · slide_from_right</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={onOpenSimple}
        >
          <Text style={styles.buttonText}>Test simple_push</Text>
        </Pressable>
      </View>
    </View>
  )
}
