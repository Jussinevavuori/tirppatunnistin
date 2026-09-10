import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { getUniformRandom } from "#/utils/getUniformRandom";

describe("getUniformRandom", () => {
	let originalMathRandom: typeof Math.random;

	beforeEach(() => {
		originalMathRandom = Math.random;
	});

	afterEach(() => {
		Math.random = originalMathRandom;
	});

	it("should return the only element in a single-item array", () => {
		expect(getUniformRandom(["single"])).toBe("single");
	});

	it("should select first element when Math.random is 0", () => {
		Math.random = () => 0;
		const items = ["first", "second", "third"];
		expect(getUniformRandom(items)).toBe("first");
	});

	it("should select middle element when Math.random is 0.5", () => {
		Math.random = () => 0.5;
		const items = ["first", "second", "third", "fourth"];
		// Math.floor(0.5 * 4) = 2 -> 'third'
		expect(getUniformRandom(items)).toBe("third");
	});

	it("should select last element when Math.random approaches 1", () => {
		Math.random = () => 0.9999;
		const items = ["first", "second", "third"];
		expect(getUniformRandom(items)).toBe("third");
	});
});
