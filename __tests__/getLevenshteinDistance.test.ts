import { describe, expect, it } from "bun:test";
import { getLevenshteinDistance } from "#/utils/getLevenshteinDistance";

describe("getLevenshteinDistance", () => {
	it("should return 0 for identical strings", () => {
		expect(getLevenshteinDistance("talitiainen", "talitiainen")).toBe(0);
		expect(getLevenshteinDistance("", "")).toBe(0);
	});

	it("should handle empty strings against non-empty strings", () => {
		expect(getLevenshteinDistance("", "kuukkelari")).toBe(10);
		expect(getLevenshteinDistance("harakka", "")).toBe(7);
	});

	it("should calculate single character insertions, deletions, and substitutions", () => {
		// Deletion
		expect(getLevenshteinDistance("kissa", "kisa")).toBe(1);
		// Insertion
		expect(getLevenshteinDistance("kisa", "kissa")).toBe(1);
		// Substitution
		expect(getLevenshteinDistance("kissa", "koira")).toBe(3);
	});

	it("should correctly compare Finnish bird names with minor typos", () => {
		// Single typo
		expect(getLevenshteinDistance("talitiaiine", "talitiainen")).toBe(2);
		// Three substitutions: "sini" vs "tali" -> s->t, i->a, n->l, i==i -> 3 substitutions
		expect(getLevenshteinDistance("sinitiainen", "talitiainen")).toBe(3);
	});

	it("should handle special Finnish characters (ä, ö, å)", () => {
		expect(getLevenshteinDistance("pähkinähakki", "pähkinähakki")).toBe(0);
		expect(getLevenshteinDistance("pahkinahakki", "pähkinähakki")).toBe(2);
	});

	it("should be case-sensitive", () => {
		expect(getLevenshteinDistance("Harakka", "harakka")).toBe(1);
	});
});
