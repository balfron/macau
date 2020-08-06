import { Suit, Rank, ProcessedCardData } from "../types";

export interface CardData {
  [key: number]: { suit: Suit; rank: Rank };
}

const suits: Suit[] = ["C", "D", "H", "S"];
const ranks: Rank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

let counter = 1;

const suitsDict: { [k: string]: ProcessedCardData[] } = {
  C: [],
  H: [],
  S: [],
  D: [],
};

const data: CardData = {};
ranks.forEach((r) =>
  suits.forEach((s) => {
    data[counter] = { suit: s, rank: r };

    suitsDict[s].push({ id: counter, rank: r });
    counter++;
  })
);

export const cardData = data; // data format suitable for quick lookup from response
export const suitsData = suitsDict; // data format suitable for producing UI
