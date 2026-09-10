import { describe, expect, it } from "bun:test";
import { lerp } from "#/utils/lerp";

describe("lerp", () => {
	it("should interpolate at midpoint (t = 0.5)", () => {
		expect(lerp(0, 10, 0.5)).toBe(5);
		expect(lerp(100, 200, 0.5)).toBe(150);
	});

	it("should return start value when t = 0", () => {
		expect(lerp(0, 10, 0)).toBe(0);
		expect(lerp(-50, 50, 0)).toBe(-50);
	});

	it("should return end value when t = 1", () => {
		expect(lerp(0, 10, 1)).toBe(10);
		expect(lerp(-50, 50, 1)).toBe(50);
	});

	it("should handle negative ranges", () => {
		expect(lerp(-10, 10, 0.5)).toBe(0);
		expect(lerp(-20, -10, 0.25)).toBe(-17.5);
	});

	it("should allow extrapolation when t < 0 or t > 1", () => {
		expect(lerp(0, 10, 1.5)).toBe(15);
		expect(lerp(0, 10, -0.5)).toBe(-5);
	});

	it("should return same start/end value regardless of t", () => {
		expect(lerp(42, 42, 0.5)).toBe(42);
		expect(lerp(42, 42, 2.0)).toBe(42);
	});
});
