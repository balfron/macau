import * as React from "react";
import { Card } from "../selectable-card";
import { SuitDisplayCard } from "../suit-display-card";
import { suitsData } from "../../card-data";
import { Suit, ProcessedCardData } from "../../types";

export interface CardSelectionGridProps {
  solve: (selection: number[]) => void;
  fetchInProgress: boolean;
}
// const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
export const CardSelectionGrid = (props: CardSelectionGridProps) => {
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

  const clearSelection = () => {
    setSelected([]);
  };

  const solveSolution = () => {
    props.solve(selected);
  };

  return (
    <>
      <div className="card-selection-grid">
        {Object.keys(suitsData).map((key) => {
          return (
            <div key={key} className={`card-selecton-grid__suit`}>
              <div>
                <SuitDisplayCard suit={key as Suit} />
                {suitsData[key].slice(0, 6).map((card: ProcessedCardData) => (
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
                {suitsData[key].slice(6, 13).map((card: ProcessedCardData) => (
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
      <div className="control-panel">
        <button
          disabled={selected.length === 0 || props.fetchInProgress}
          onClick={clearSelection}
        >
          Clear
        </button>
        <button
          disabled={selected.length !== 13 || props.fetchInProgress}
          onClick={solveSolution}
        >
          {props.fetchInProgress ? "Solving..." : "Solve"}
        </button>
      </div>
    </>
  );
};
