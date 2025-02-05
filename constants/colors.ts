/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { background } from "native-base/lib/typescript/theme/styled-system";
import { blue, green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const colors = {

  //custom colors
  white : '#FFFFFF',
  green : '#1EB500',
  background : '#0F232C',
  orange : '#F79600',
  blue : '#009AD6',
  black : '#000000',

 
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
