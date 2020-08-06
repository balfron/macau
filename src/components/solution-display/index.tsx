import * as React from "react";
import { Solution } from "../../types";
import { Card } from "../selectable-card";
import { cardData } from "../../card-data";

export interface SolutionDisplayProps {
  solution: Solution;
}

const renderSolutionRow = (row: number[]) => {
  return row.map((id) => {
    const card = cardData[id];
    return (
      <Card
        key={id}
        suit={card.suit}
        id={id}
        rank={card.rank}
        isSelected={false}
        isDisabled={false}
      />
    );
  });
};
export const SolutionDisplay = (props: SolutionDisplayProps) => {
  return (
    <div className="solution-display">
      <div className="solution-display__score">
        Score: {props.solution.score}
      </div>
      <div className="solution-display__pyramid">
        <div>{renderSolutionRow(props.solution.pyramid[2])}</div>
        <div>{renderSolutionRow(props.solution.pyramid[1])}</div>
        <div>{renderSolutionRow(props.solution.pyramid[0])}</div>
      </div>
    </div>
  );
};
