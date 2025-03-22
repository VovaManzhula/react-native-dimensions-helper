# react-native-dimensions-helper

A lightweight utility for calculating percentages of screen/window dimensions in React Native.

## Installation

```bash
npm install react-native-dimensions-helper



Usage
javascript

import { wh, ww, sh, sw } from 'react-native-dimensions-helper';

  width: ww(50), // 50% of window width
  height: wh(20), // 20% of window height

API
wh(percent): Returns percentage of window height.
ww(percent): Returns percentage of window width.
sh(percent): Returns percentage of screen height.
sw(percent): Returns percentage of screen width.