/**
 * Linearly interpolates between two numbers a and b based on t.
 */
export function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}
