import { mkdirSync, writeFileSync } from "node:fs";

// arsonist: a real single word people use as a joke label for their boss (1),
// funny with zero setup — the image lands instantly at lunch (2), catches the
// crisis-manufacturing boss who then plays hero putting out their own fire (3),
// fresh — nobody's first word for a boss (4) — and fire-starting bosses exist in
// kitchens, warehouses, and offices alike (5).
const word = "arsonist";

function validate(word: string): void {
  if (word.length < 1) throw new Error("Word must not be empty.");
  if (word.length > 30) throw new Error(`Word "${word}" is too long for the entry.`);
  if (/\s/.test(word)) throw new Error(`Word "${word}" must not contain whitespace.`);
}

validate(word);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
