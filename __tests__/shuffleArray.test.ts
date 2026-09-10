import { describe, expect, it } from "bun:test";
import { shuffleArray } from "#/utils/shuffleArray";

describe("shuffleArray", () => {
	it("should return an empty array when input is empty", () => {
		expect(shuffleArray([])).toEqual([]);
	});

	it("should return a single-element array unchanged", () => {
		expect(shuffleArray([42])).toEqual([42]);
	});

	it("should not mutate the original input array", () => {
		const original = [1, 2, 3, 4, 5];
		const copy = [...original];
		shuffleArray(original);
		expect(original).toEqual(copy);
	});

	it("should contain all elements of the original array", () => {
		const original = ["a", "b", "c", "d", "e"];
		const shuffled = shuffleArray(original);

		expect(shuffled).toHaveLength(original.length);
		expect([...shuffled].sort()).toEqual([...original].sort());
	});

	it("should reorder elements when shuffled", () => {
		const original = Array.from({ length: 50 }, (_, i) => i);
		const shuffled = shuffleArray(original);

		// With 50 elements, it is virtually impossible for shuffleArray to produce the exact same order
		expect(shuffled).not.toEqual(original);
	});
});
