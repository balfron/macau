import * as React from "react";
import { Suit, Rank } from "../../types";

export interface CardProps {
  isSelected: boolean;
  suit: Suit;
  rank: Rank;
  id: number;
  isDisabled: boolean;
  onClick: (id: number) => void;
}

const SuitToSymbol = (suit: Suit): JSX.Element => {
  switch (suit) {
    case "C":
      return <>&#9827;</>;
    case "H":
      return <>&#9829;</>;
    case "S":
      return <>&#9824;</>;
    case "D":
      return <>&#9830;</>;
  }
};

export const Card = (props: CardProps) => {
  let classes = "card-selection-grid__card";

  classes += props.isSelected ? " card-selection-grid__card--selected" : "";
  classes += props.isDisabled ? " card-selection-grid__card--disabled" : "";

  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <div className={classes} onClick={handleClick}>
      <div className="card-selection-grid__card__suit-and-rank">
        {props.rank}
        {SuitToSymbol(props.suit)}
      </div>
      {props.isSelected && (
        <div className="card-selection-grid__card__selected-marker">
          &#10004;
        </div>
      )}
    </div>
  );
};
