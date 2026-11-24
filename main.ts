import { mkdirSync, writeFileSync } from "node:fs";

// arsonist: a real single word people use as a joke label for their boss (1),
// funny with zero setup — the image lands instantly at lunch (2), catches the
// crisis-manufacturing boss who then plays hero putting out their own fire (3),
// fresh — nobody's first word for a boss (4) — and fire-starting bosses exist in
// kitchens, warehouses, and offices alike (5).
const word = "arsonist";

function validate(word: string): void {
  const ok = word.length >= 1 && word.length <= 30 && !/\s/.test(word);
  if (!ok) throw new Error(`Word "${word}" must be one word of 1-30 characters.`);
}

validate(word);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
