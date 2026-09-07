import { STORAGE_KEY } from "./game-utils";
import type { Attempt } from "./types";

export const STORAGE_SCHEMA_VERSION = 1;

type StoredAttempts = {
	schemaVersion: number;
	attempts: Attempt[];
};

export const loadAttempts = (): Attempt[] => {
	try {
		const parsed: unknown = JSON.parse(
			localStorage.getItem(STORAGE_KEY) ?? "null",
		);
		if (Array.isArray(parsed)) {
			const migrated = parsed as Attempt[];
			saveAttempts(migrated);
			return migrated;
		}
		if (isStoredAttempts(parsed)) {
			if (parsed.schemaVersion === STORAGE_SCHEMA_VERSION)
				return parsed.attempts;
			if (parsed.schemaVersion < STORAGE_SCHEMA_VERSION) {
				const migrated = migrate(parsed);
				saveAttempts(migrated);
				return migrated;
			}
		}
		return [];
	} catch {
		return [];
	}
};

export const saveAttempts = (attempts: Attempt[]) => {
	const stored: StoredAttempts = {
		schemaVersion: STORAGE_SCHEMA_VERSION,
		attempts,
	};
	localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
};

const isStoredAttempts = (value: unknown): value is StoredAttempts =>
	typeof value === "object" &&
	value !== null &&
	"schemaVersion" in value &&
	"attempts" in value &&
	Array.isArray(value.attempts);

const migrate = (stored: StoredAttempts): Attempt[] => stored.attempts;
