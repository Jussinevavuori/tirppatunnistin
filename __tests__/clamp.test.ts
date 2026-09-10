import { describe, expect, it } from "bun:test";
import { clamp } from "#/utils/clamp";

describe("clamp", () => {
	it("should clamp values above max", () => {
		expect(clamp(15, 0, 10)).toBe(10);
	});

	it("should clamp values below min", () => {
		expect(clamp(-5, 0, 10)).toBe(0);
	});

	it("should return the value when within range", () => {
		expect(clamp(5, 0, 10)).toBe(5);
	});

	it("should handle exact min and max values", () => {
		expect(clamp(0, 0, 10)).toBe(0);
		expect(clamp(10, 0, 10)).toBe(10);
	});

	it("should handle negative ranges", () => {
		expect(clamp(-15, -20, -10)).toBe(-15);
		expect(clamp(-25, -20, -10)).toBe(-20);
		expect(clamp(0, -20, -10)).toBe(-10);
	});

	it("should handle floating point numbers", () => {
		expect(clamp(3.14, 0.5, 2.5)).toBe(2.5);
		expect(clamp(1.5, 0.5, 2.5)).toBe(1.5);
		expect(clamp(0.1, 0.5, 2.5)).toBe(0.5);
	});

	it("should handle min equal to max", () => {
		expect(clamp(5, 10, 10)).toBe(10);
		expect(clamp(15, 10, 10)).toBe(10);
	});
});
