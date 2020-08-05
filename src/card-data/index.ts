import { Suit, Rank } from "../types";

export interface CardData {
  [key: number]: { suit: Suit; rank: Rank };
}

const suits: Suit[] = ["C", "D", "H", "S"];
const ranks: Rank[] = [
  "A",
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
];

let counter = 0;

const data: CardData = {};
suits.forEach((s) =>
  ranks.forEach((r) => {
    data[counter] = { suit: s, rank: r };
    counter++;
  })
);
export const cardData = data;
