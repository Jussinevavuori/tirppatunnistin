import { describe, expect, it } from "bun:test";
import { BIRDS } from "#/data/birds";

describe("BIRDS dataset", () => {
	it("should contain a non-empty list of birds", () => {
		expect(BIRDS.length).toBeGreaterThan(0);
	});

	it("should have unique IDs for all birds", () => {
		const ids = BIRDS.map((b) => b.id);
		const uniqueIds = new Set(ids);
		expect(uniqueIds.size).toBe(ids.length);
	});

	it("should have valid required fields for every bird", () => {
		for (const bird of BIRDS) {
			expect(bird.id).toBeString();
			expect(bird.id.length).toBeGreaterThan(0);

			expect(bird.nameFi).toBeString();
			expect(bird.nameFi.length).toBeGreaterThan(0);

			expect(bird.nameSv).toBeString();
			expect(bird.nameSv.length).toBeGreaterThan(0);

			expect(bird.scientificName).toBeString();
			expect(bird.scientificName.length).toBeGreaterThan(0);

			expect(bird.averageSizeCm).toBeGreaterThan(0);

			expect(bird.imageUrls).toBeArray();
			expect(bird.imageUrls.length).toBeGreaterThan(0);
			for (const url of bird.imageUrls) {
				expect(url).toStartWith("http");
			}

			expect(bird.audioUrl).toBeString();
			if (bird.audioUrl.length > 0) {
				expect(bird.audioUrl).toStartWith("http");
			}

			expect(bird.description).toBeDefined();
			expect(bird.description.appearance).toBeString();
			expect(bird.description.location).toBeString();
			expect(bird.description.sound).toBeString();
			expect(bird.description.other).toBeString();
			expect(bird.description.size).toBeString();
		}
	});
});
