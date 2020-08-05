export type Suit = "C" | "H" | "S" | "D";
export type Rank =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

export type ProcessedCardData = {
  id: number;
  rank: Rank;
};
