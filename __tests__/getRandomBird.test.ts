import { describe, expect, it } from "bun:test";
import { BIRDS } from "#/data/birds";
import { getRandomBird, getRandomBirds } from "#/utils/getRandomBird";

describe("getRandomBird & getRandomBirds", () => {
	const sampleBirds = BIRDS.slice(0, 5);

	describe("getRandomBird", () => {
		it("should throw an error if the birds selection is empty", () => {
			expect(() => getRandomBird({ birds: [] })).toThrow(
				"No birds available in the selection.",
			);
		});

		it("should return a bird from the given list", () => {
			const bird = getRandomBird({ birds: sampleBirds });
			expect(sampleBirds).toContain(bird);
		});

		it("should work with applyWeights set to true", () => {
			const bird = getRandomBird({ birds: sampleBirds, applyWeights: true });
			expect(sampleBirds).toContain(bird);
		});
	});

	describe("getRandomBirds", () => {
		it("should throw an error if count exceeds available birds", () => {
			expect(() => getRandomBirds(10, { birds: sampleBirds })).toThrow(
				"Requested more unique birds than available in the selection.",
			);
		});

		it("should return exact requested count of unique birds", () => {
			const result = getRandomBirds(3, {
				birds: sampleBirds,
				shuffle: false,
			});
			expect(result).toHaveLength(3);

			// Check uniqueness
			const uniqueIds = new Set(result.map((b) => b.id));
			expect(uniqueIds.size).toBe(3);
		});

		it("should preserve initial birds in result", () => {
			const initialBird = sampleBirds[0];
			const result = getRandomBirds(3, {
				initial: [initialBird],
				birds: sampleBirds,
				shuffle: false,
			});

			expect(result).toHaveLength(3);
			expect(result).toContain(initialBird);
		});

		it("should handle count equal to total birds available", () => {
			const result = getRandomBirds(sampleBirds.length, {
				birds: sampleBirds,
				shuffle: false,
			});
			expect(result).toHaveLength(sampleBirds.length);
			expect(new Set(result.map((b) => b.id)).size).toBe(sampleBirds.length);
		});
	});
});
