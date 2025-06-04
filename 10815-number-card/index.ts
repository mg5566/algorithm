export function checkCards(cards: number[], queries: number[]): number[] {
  const cardsSet = new Set(cards);
  return queries.map((q) => (cardsSet.has(q) ? 1 : 0));
}

export function solve(input: string): string {
  const lines = input.trim().split(/\n/);
  const n = Number(lines[0]);
  const cards = lines[1].trim().split(/\s+/).map(Number);
  const m = Number(lines[2]);
  const queries = lines[3].trim().split(/\s+/).map(Number);
  const result = checkCards(cards, queries);
  return result.join(" ");
}

if (require.main === module) {
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf8");
  console.log(solve(input));
}
