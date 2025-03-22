
# Project Title

A brief description of what this project does and who it's for

# **React Native Dimensions Helper**

![npm](https://img.shields.io/npm/v/react-native-dimensions-helper)

![license](https://img.shields.io/npm/l/react-native-dimensions-helper) 
 
![downloads](https://img.shields.io/npm/dt/react-native-dimensions-helper)

A lightweight utility for calculating percentages of screen and window dimensions in React Native. This library simplifies responsive design by providing intuitive functions to calculate dimensions based on percentages.

---

## **Why Use This Library?**

Designing responsive layouts in React Native can be challenging, especially when dealing with different screen sizes and orientations. **React Native Dimensions Helper** makes it easy to create adaptive UIs by:

- **Simplifying Percentage-Based Styling**: Easily calculate percentages of screen or window dimensions without manual math.
- **Optimized for Performance**: Results are cached to prevent unnecessary recalculations, ensuring smooth rendering.
- **Handles Orientation Changes**: Automatically updates dimensions when the device orientation changes.
- **TypeScript Support**: Fully typed for better developer experience in TypeScript projects.
- **Error Handling**: Ensures input values are within a valid range (0.1% to 500%), preventing runtime errors.

Whether you're building a small app or a complex UI, this library helps you focus on design rather than calculations.

---

## **Installation**

Install the library using npm or yarn:

```bash
npm install react-native-dimensions-helper
```
Or with Yarn:
```bash
yarn add react-native-dimensions-helper
```





## Usage/Examples

Import the helper functions and use them to calculate dimensions as percentages of the screen or window size.
```javascript
import { wh, ww, sh, sw } from 'react-native-dimensions-helper';

const styles = {
  width: ww(50), // 50% of window width
  height: wh(20), // 20% of window height
  screenWidth: sw(100), // 100% of screen width
  screenHeight: sh(50), // 50% of screen height
};

console.log(styles);
// Output: { width: 200, height: 160, screenWidth: 400, screenHeight: 300 }
```


## API Reference





| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `ww(value)`| `number` | **Required**. 0.1-500  |
| `wh(value)`| `number` | **Required**. 0.1-500  |
| `sw(value)`| `number` | **Required**. 0.1-500  |
| `sh(value)`| `number` | **Required**. 0.1-500  |


## Features
- Responsive Design Made Easy

- Use percentages instead of hard-coded values for widths, heights, margins, and paddings.
- Perfect for creating adaptive layouts that work seamlessly across devices.
- Automatic Orientation Handling, the library listens for orientation changes and updates dimensions dynamically, ensuring 
- your app looks great in both portrait and landscape modes.
- Results are cached to avoid redundant calculations, reducing the risk of performance bottlenecks during re-renders.
- Error Prevention
- Input validation ensures that percentages are always within the valid range (0.1% to 500%), preventing unexpected behavior.
- TypeScript Ready
- Fully typed for TypeScript projects, providing autocompletion and type safety.

## Contributing

We welcome contributions! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)

