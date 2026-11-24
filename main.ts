import { mkdirSync, writeFileSync } from "node:fs";

// arsonist: a real single word people use as a joke label for their boss (1),
// funny with zero setup — the image lands instantly at lunch (2), catches the
// crisis-manufacturing boss who then plays hero putting out their own fire (3),
// fresh — nobody's first word for a boss (4) — and fire-starting bosses exist in
// kitchens, warehouses, and offices alike (5).
const word = "arsonist";

function validate(word: string): void {
  const checks: [boolean, string][] = [
    [word.length === 0, "the entry is empty — supply one word"],
    [word.length > 30, "the entry runs past thirty characters — trim it down"],
    [/\s/.test(word), "the entry holds a space or tab — a single word only"],
  ];
  for (const [tripped, complaint] of checks) {
    if (tripped) throw new Error(`Entry rejected: ${complaint}.`);
  }
}

validate(word);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
