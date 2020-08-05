import * as React from "react";
import { Card } from "../selectable-card";
import { SuitDisplayCard } from "../suit-display-card";
import { cardData } from "../../card-data";
import { Suit, ProcessedCardData } from "../../types";
import { processCardData } from "../../utils/process-card-data";

const suits = processCardData(cardData);

export const CardSelectionGrid = () => {
  const [selected, setSelected] = React.useState<number[]>([]);

  const toggleSelected = (id: number) => {
    const isAlreadySelected = selected.includes(id);
    let newSelected: number[];
    if (isAlreadySelected) {
      newSelected = selected.filter((i) => i !== id);

      setSelected(newSelected);
    } else if (selected.length < 13) {
      newSelected = [...selected, id];
      setSelected(newSelected);
    }
  };

  return (
    <div className="card-selection-grid">
      {Object.keys(suits).map((key) => {
        return (
          <div
            key={key}
            className={`card-selecton-grid__suit ${
              key === "H" || key === "D" ? "card-selecton-grid__suit--red" : ""
            }`}
          >
            <div>
              <SuitDisplayCard suit={key as Suit} />
              {suits[key].slice(0, 6).map((card: ProcessedCardData) => (
                <Card
                  key={card.id}
                  suit={key as Suit}
                  id={card.id}
                  rank={card.rank}
                  isSelected={selected.includes(card.id)}
                  isDisabled={
                    !selected.includes(card.id) && selected.length === 13
                  }
                  onClick={toggleSelected}
                />
              ))}
            </div>
            <div>
              {suits[key].slice(6, 13).map((card: ProcessedCardData) => (
                <Card
                  key={card.id}
                  id={card.id}
                  suit={key as Suit}
                  rank={card.rank}
                  isSelected={selected.includes(card.id)}
                  isDisabled={
                    !selected.includes(card.id) && selected.length === 13
                  }
                  onClick={toggleSelected}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
