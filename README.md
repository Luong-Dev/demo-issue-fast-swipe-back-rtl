# iOS RTL fast swipe-back reproduction

Minimal reproduction for an iOS RTL interactive swipe-back issue involving
`react-native-screens` and React Navigation Native Stack.

The visual issue has only been reproduced on a physical iPhone. The iOS Simulator can
confirm that the project compiles, but it is not a valid reproduction environment.

## Environment

- Expo SDK `55.0.9`
- React `19.2.0`
- React Native `0.83.4`
- React Navigation `6.1.18`
- React Navigation Native Stack `6.11.0`
- React Native Screens `4.25.2`
- React Native Reanimated `4.3.0`
- React Native Worklets `0.8.1`
- React Native Safe Area Context `5.6.2`
- React Native Gesture Handler `2.31.0`
- Hermes
- New Architecture
- iOS 26
- Development Debug build

The issue has also been observed with React Navigation v7. This reproduction intentionally
uses React Navigation v6 to match the original environment.

## Install

```bash
yarn install
yarn prebuild:ios
cd ios
pod install
cd ..
```

## Run on a physical iPhone

Development signing is required. App Store distribution signing is not required.

1. Connect the iPhone and enable Developer Mode.
2. Open `ios/RNScreensRTLSwipeRepro.xcworkspace` in Xcode.
3. Select the application target and open **Signing & Capabilities**.
4. Enable **Automatically manage signing**.
5. Select your own Apple Development Team.
6. Change the example bundle identifier if Xcode requires a unique identifier.
7. Run:

```bash
yarn ios:device
```

Do not commit a Team ID, certificate, provisioning profile, Apple ID, or device identifier.

## Activate RTL

RTL is forced with `I18nManager`. After the first launch:

1. Completely terminate the application.
2. Open it again.
3. Confirm the `RTL ACTIVE` badge is visible before testing.

## Reproduce

1. Open **Test slide_from_right**.
2. Navigate from Screen A to Screen B.
3. Start the back gesture from the physical edge of the iPhone screen.
4. Swipe back quickly.
5. Repeat several times.
6. Observe whether Screen A appears, Screen B briefly flashes again, and the pop transition
   then completes on Screen A.
7. Compare it with the **Go back using action** button.
8. Repeat the flow using **Test simple_push**.
9. After a `simple_push` swipe-back, immediately press the counter on Screen A.

The visual issue reproduces approximately 8–9 out of 10 fast edge swipe-back attempts in the
affected environment.

## Expected behavior

The interactive pop transition should move continuously from Screen B to Screen A without
briefly showing Screen B again.

## Actual behavior

Screen A appears, Screen B briefly flashes again, and the pop transition then resumes and
completes on Screen A. Only one navigation pop occurs.

## Comparison

| Scenario | Result |
| --- | --- |
| RTL + fast edge swipe + `slide_from_right` | Screen B briefly flashes again |
| RTL + action-based back | No visual glitch |
| LTR + fast edge swipe | No visual glitch |
| RTL + `simple_push` | Visual glitch is not reproduced |
| RTL + `simple_push` + immediate press after pop | Press may wait until transition finishes |
