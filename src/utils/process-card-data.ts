import { CardData } from "../card-data";
import { ProcessedCardData } from "../types";

export const processCardData = (data: CardData) => {
  const suits: { [k: string]: ProcessedCardData[] } = {
    C: [],
    H: [],
    S: [],
    D: [],
  };
  Object.keys(data).forEach((id) => {
    const card = data[parseInt(id)];
    suits[card.suit].push({ id: parseInt(id), rank: card.rank });
  });

  return suits;
};
