import * as React from "react";
import { Suit } from "../../types";

export interface SuitDisplayCardProps {
  suit: Suit;
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
export const SuitDisplayCard = (props: SuitDisplayCardProps) => {
  return <div className="suit-display-card">{SuitToSymbol(props.suit)}</div>;
};
