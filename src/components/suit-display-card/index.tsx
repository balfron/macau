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
  let classes = "suit-display-card";
  classes +=
    props.suit === "H" || props.suit === "D" ? " suit-display-card--red" : "";
  return <div className={classes}>{SuitToSymbol(props.suit)}</div>;
};
