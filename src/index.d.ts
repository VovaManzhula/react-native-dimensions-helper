/**
 * Calculates a percentage of the window height.
 * @param percent - A number between 0.1 and 500 representing the percentage.
 * @returns The rounded integer value of the calculated height.
 * @throws {Error} If percent is not between 0.1 and 500.
 */
export function wh(percent: number): number;

/**
 * Calculates a percentage of the window width.
 * @param percent - A number between 0.1 and 500 representing the percentage.
 * @returns The rounded integer value of the calculated width.
 * @throws {Error} If percent is not between 0.1 and 500.
 */
export function ww(percent: number): number;

/**
 * Calculates a percentage of the screen height.
 * @param percent - A number between 0.1 and 500 representing the percentage.
 * @returns The rounded integer value of the calculated height.
 * @throws {Error} If percent is not between 0.1 and 500.
 */
export function sh(percent: number): number;

/**
 * Calculates a percentage of the screen width.
 * @param percent - A number between 0.1 and 500 representing the percentage.
 * @returns The rounded integer value of the calculated width.
 * @throws {Error} If percent is not between 0.1 and 500.
 */
export function sw(percent: number): number;
