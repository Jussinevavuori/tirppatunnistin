import { describe, expect, it } from "bun:test";
import { getUniqueArrayByKey } from "#/utils/getUniqueArrayByKey";

describe("getUniqueArrayByKey", () => {
	it("should return an empty array when given an empty array", () => {
		expect(getUniqueArrayByKey([], (item) => item)).toEqual([]);
	});

	it("should return the same array elements when there are no duplicates", () => {
		const items = [
			{ id: "1", name: "Harakka" },
			{ id: "2", name: "Varis" },
			{ id: "3", name: "Korpikotka" },
		];
		expect(getUniqueArrayByKey(items, (item) => item.id)).toEqual(items);
	});

	it("should remove duplicate items based on key keeping the first occurrence", () => {
		const items = [
			{ id: "1", name: "First Harakka" },
			{ id: "2", name: "Varis" },
			{ id: "1", name: "Second Harakka" },
			{ id: "3", name: "Korpikotka" },
			{ id: "2", name: "Another Varis" },
		];

		const result = getUniqueArrayByKey(items, (item) => item.id);
		expect(result).toHaveLength(3);
		expect(result).toEqual([
			{ id: "1", name: "First Harakka" },
			{ id: "2", name: "Varis" },
			{ id: "3", name: "Korpikotka" },
		]);
	});

	it("should not mutate the original array", () => {
		const items = [
			{ id: "1", val: "a" },
			{ id: "1", val: "b" },
		];
		const originalCopy = [...items];
		getUniqueArrayByKey(items, (item) => item.id);
		expect(items).toEqual(originalCopy);
	});

	it("should work with primitive transformation keys", () => {
		const strings = ["apple", "BANANA", "Apple", "banana"];
		const uniqueIgnoreCase = getUniqueArrayByKey(strings, (s) =>
			s.toLowerCase(),
		);
		expect(uniqueIgnoreCase).toEqual(["apple", "BANANA"]);
	});
});
