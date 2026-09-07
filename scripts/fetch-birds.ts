import { mkdir, writeFile } from "node:fs/promises";
import { top100BirdNames } from "../src/features/game/ranking";

const wikipediaBase = "https://fi.wikipedia.org/wiki/";
const userAgent = "Tirppatunnistin/1.0 (educational bird-identification app)";

type Bird = {
	id: string;
	name: string;
	englishName: string;
	scientificName: string;
	image: string;
	wikipedia: string;
	wingspan: string;
	wingspanCm: number;
	facts: string[];
	audio?: string;
};

const decodeEntities = (value: string) => value
	.replace(/&amp;/g, "&")
	.replace(/&quot;/g, '"')
	.replace(/&#039;|&apos;/g, "'")
	.replace(/&nbsp;/g, " ")
	.replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
	.replace(/&#([0-9]+);/g, (_, code: string) => String.fromCodePoint(Number(code)));

const stripHtml = (value: string) => decodeEntities(value
	.replace(/<script[\s\S]*?<\/script>/gi, "")
	.replace(/<style[\s\S]*?<\/style>/gi, "")
	.replace(/<sup[\s\S]*?<\/sup>/gi, "")
	.replace(/<[^>]+>/g, " ")
	.replace(/[\t\r\n]+/g, " ")
	.replace(/\s{2,}/g, " ")
	.trim());

const attribute = (tag: string, name: string) => tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1] ?? "";
const idFor = (name: string) => name.toLocaleLowerCase("fi-FI").replace(/[^a-z0-9åäö]+/gi, "-").replace(/^-|-$/g, "");
const sentencesFrom = (html: string) => [...html.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/gi)]
	.map((match) => stripHtml(match[1]))
	.filter((paragraph) => paragraph.length > 40 && !/Wikispeciesissä|Commonsissa|Lähteet|muokkaa/i.test(paragraph))
	.flatMap((paragraph) => paragraph.split(/(?<=[.!?])\s+/))
	.map((sentence) => sentence.trim())
	.filter((sentence) => sentence.length > 35 && !/Wikispeciesissä|Commonsissa/i.test(sentence))
	.slice(0, 3);
const scientificFrom = (html: string) => {
	const infobox = html.match(/<table[^>]+class=["'][^"']*infobox[^"']*["'][\s\S]*?<\/table>/i)?.[0] ?? html;
	const text = stripHtml(infobox);
	return text.match(/Kaksiosainen nimi\s+([A-ZÅÄÖ][a-zåäö-]+\s+[a-z-]+)/i)?.[1] ?? "";
};
const wingspanFrom = (html: string) => {
	const text = stripHtml(html);
	const match = text.match(/(?:siipien\s+kärkiväli|siipiväli|wingspan|wing\s+span)(?:ksi|\s+of)?[^.]{0,140}?([0-9]+(?:[,.][0-9]+)?)(?:–|-|−|to)([0-9]+(?:[,.][0-9]+)?)\s*cm/i);
	if (!match) return { wingspan: "", wingspanCm: 0 };
	const min = Number(match[1].replace(",", "."));
	const max = Number(match[2].replace(",", "."));
	return { wingspan: `${match[1]}–${match[2]} cm`, wingspanCm: Math.round((min + max) / 2) };
};
const imageFrom = (html: string) => {
	const imageTag = html.match(/<meta[^>]+property=["']og:image["'][^>]+>/i)?.[0] ?? "";
	return decodeEntities(attribute(imageTag, "content"));
};
const audioFrom = (html: string) => {
	const match = html.match(/href=["']([^"']+(?:\.ogg|\.mp3)(?:\?[^"']*)?)["']/i);
	if (!match) return undefined;
	return new URL(decodeEntities(match[1]), wikipediaBase).href;
};

const englishNameFrom = (html: string) =>
	decodeEntities(html.match(/hreflang=["']en["'][^>]*data-title=["']([^"']+)["']/i)?.[1] ?? "");

const fetchPage = async (name: string) => {
	const wikipedia = `${wikipediaBase}${encodeURIComponent(name.replaceAll(" ", "_"))}`;
	const response = await fetch(wikipedia, { headers: { "User-Agent": userAgent } });
	if (!response.ok) throw new Error(`${response.status} ${wikipedia}`);
	const html = await response.text();
	const scientificName = scientificFrom(html);
	let span = wingspanFrom(html);
	const englishName = englishNameFrom(html);
	if (!span.wingspan && englishName) {
		const englishResponse = await fetch(`https://en.wikipedia.org/wiki/${encodeURIComponent(englishName.replaceAll(" ", "_"))}`, { headers: { "User-Agent": userAgent } });
		if (englishResponse.ok) span = wingspanFrom(await englishResponse.text());
	}
	const bird: Bird = {
		id: idFor(name),
		name,
		englishName,
		scientificName,
		image: imageFrom(html),
		wikipedia,
		wingspan: span.wingspan,
		wingspanCm: span.wingspanCm,
		facts: sentencesFrom(html),
		audio: audioFrom(html),
	};
	return bird;
};

const output: Bird[] = [];
for (const name of top100BirdNames) {
	const bird = await fetchPage(name);
	if (!bird.scientificName || bird.facts.length < 2 || !bird.image) throw new Error(`Incomplete Wikipedia data for ${name}`);
	output.push(bird);
	console.log(`${output.length}/${top100BirdNames.length} ${name}`);
}

await mkdir("src/features/game", { recursive: true });
const source = `import type { Bird } from "./types";\n\nexport const birds: Bird[] = ${JSON.stringify(output, null, "\t")};\n`;
await writeFile("src/features/game/birds.ts", source, "utf8");
