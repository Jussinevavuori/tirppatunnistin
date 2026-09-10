import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { getWeightedRandom } from "#/utils/getWeightedRandom";

describe("getWeightedRandom", () => {
	let originalMathRandom: typeof Math.random;

	beforeEach(() => {
		originalMathRandom = Math.random;
	});

	afterEach(() => {
		Math.random = originalMathRandom;
	});

	it("should return the single item regardless of weight", () => {
		const items = [{ id: "a", weight: 5 }];
		expect(getWeightedRandom(items, (i) => i.weight)).toEqual({
			id: "a",
			weight: 5,
		});
	});

	it("should pick item according to weighted distribution", () => {
		const items = [
			{ id: "light", weight: 10 },
			{ id: "heavy", weight: 90 },
		];
		// Total weight = 100.
		// If random is 0.05 -> random * totalWeight = 5 -> cumulativeWeight at item 'light' is 10 (5 < 10) -> 'light'
		Math.random = () => 0.05;
		expect(getWeightedRandom(items, (i) => i.weight).id).toBe("light");

		// If random is 0.5 -> random * totalWeight = 50 -> cumulativeWeight at 'light' is 10 (50 not < 10), then at 'heavy' is 100 (50 < 100) -> 'heavy'
		Math.random = () => 0.5;
		expect(getWeightedRandom(items, (i) => i.weight).id).toBe("heavy");
	});

	it("should return last item as fallback when random equals or exceeds cumulative weight", () => {
		const items = [
			{ id: "a", weight: 10 },
			{ id: "b", weight: 20 },
		];
		// Math.random returning 1.0 means random = 30.
		// For item 'a': cumulativeWeight = 10 (30 < 10 is false)
		// For item 'b': cumulativeWeight = 30 (30 < 30 is false)
		// Loop finishes, fallback returns last item 'b'
		Math.random = () => 1;
		expect(getWeightedRandom(items, (i) => i.weight).id).toBe("b");
	});
});
