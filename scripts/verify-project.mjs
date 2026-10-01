import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8")

const packageJson = JSON.parse(read("package.json"))
const appJson = JSON.parse(read("app.json"))
const navigator = read("app/navigation/RootNavigator.tsx")
const appEntry = read("App.tsx")
const gitignore = read(".gitignore")

const expectedDependencies = {
  expo: "55.0.9",
  "expo-localization": "55.0.9",
  "@expo/metro-runtime": "55.0.7",
  "expo-status-bar": "55.0.4",
  react: "19.2.0",
  "react-native": "0.83.4",
  "@react-navigation/native": "6.1.18",
  "@react-navigation/bottom-tabs": "6.6.1",
  "@react-navigation/native-stack": "6.11.0",
  "react-native-reanimated": "4.3.0",
  "react-native-screens": "4.25.2",
  "react-native-worklets": "0.8.1",
  "react-native-safe-area-context": "5.6.2",
  "react-native-gesture-handler": "2.31.0",
  "react-native-drawer-layout": "4.2.2",
}

for (const [name, version] of Object.entries(expectedDependencies)) {
  assert.equal(packageJson.dependencies[name], version, `${name} must be pinned to ${version}`)
}

assert.equal(packageJson.devDependencies["@types/react"], "~19.0.0")
assert.equal(packageJson.devDependencies.typescript, "6.0.2")

assert.equal(packageJson.name, "demo-issue-fast-swipe-back-rtl")
assert.equal(appJson.expo.name, "RNScreensRTLSwipeRepro")
assert.equal(appJson.expo.slug, "demo-issue-fast-swipe-back-rtl")
assert.equal(appJson.expo.newArchEnabled, true)
assert.equal(appJson.expo.jsEngine, "hermes")
assert.equal(appJson.expo.extra.supportsRTL, true)
assert.equal(appJson.expo.extra.forcesRTL, true)
assert.ok(appJson.expo.plugins.includes("expo-localization"))
assert.equal(appJson.expo.ios.appleTeamId, undefined)
assert.equal(appJson.expo.ios.bundleIdentifier, "com.example.rnscreensrtlswiperepro")

assert.match(appEntry, /I18nManager\.allowRTL\(true\)/)
assert.match(appEntry, /I18nManager\.forceRTL\(true\)/)
assert.match(appEntry, /enableFreeze\(false\)/)
assert.match(navigator, /animation: "slide_from_right"/)
assert.match(navigator, /animation: "simple_push"/)
assert.match(navigator, /fullScreenGestureEnabled: false/)
assert.match(navigator, /customAnimationOnGesture: true/)
assert.match(navigator, /animationDuration: Platform\.OS === "ios" \? 240 : undefined/)
assert.match(navigator, /freezeOnBlur: false/)
assert.doesNotMatch(navigator, /freezeOnBlur:\s*true/)

assert.match(gitignore, /\.env\*/)
assert.match(gitignore, /xcuserdata/)
assert.match(gitignore, /\.mobileprovision/)

console.log("Project configuration verified")
