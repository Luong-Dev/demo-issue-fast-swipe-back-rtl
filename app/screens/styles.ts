import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 56,
  },
  home: {
    backgroundColor: "#6D28D9",
  },
  slideA: {
    backgroundColor: "#00C8F8",
  },
  slideB: {
    backgroundColor: "#FF00A8",
  },
  simpleA: {
    backgroundColor: "#16A34A",
  },
  simpleB: {
    backgroundColor: "#F59E0B",
  },
  screenIdentity: {
    position: "absolute",
    top: 72,
    left: 12,
    right: 12,
    minHeight: 72,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#111111",
  },
  screenIdentityText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 2,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    writingDirection: "rtl",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 25,
    textAlign: "center",
    writingDirection: "rtl",
  },
  directionBadge: {
    alignSelf: "center",
    borderRadius: 999,
    backgroundColor: "#221A35",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  directionBadgeText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  button: {
    minHeight: 56,
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#302050",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  secondaryButton: {
    backgroundColor: "#65537C",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  count: {
    color: "#191425",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
})
