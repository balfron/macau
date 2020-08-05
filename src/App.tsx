import React from "react";
import "./styles/main.scss";
import { CardSelectionGrid } from "./components/card-selection-grid";
import { Solution } from "./types";
import { SolutionDisplay } from "./components/solution-display";

// const mockSolution: Solution = {
//   pyramid: {
//     bottom: [1, 3, 5, 8],
//     middle: [12, 15, 16, 18, 4],
//     top: [32, 35, 37],
//   },
//   score: 12,
// };

function App() {
  const [solution, setSolution] = React.useState<Solution | null>();
  const [fetchInProgress, setFetchInProgress] = React.useState<boolean>(false);
  const fetchSolution = async (selected: number[]) => {
    const bodyData = {
      cards: selected,
    };

    try {
      setFetchInProgress(true);
      const response = await fetch("https://fantasysolver.herokuapp.com/", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(bodyData),
      });

      console.log(response);
      const solution = await response.json();
      console.log(solution);
      setSolution(solution);
      setFetchInProgress(false);
    } catch (e) {
      console.error(e);
      setFetchInProgress(false);
    }
  };
  return (
    <div className="app-container">
      <CardSelectionGrid
        solve={fetchSolution}
        fetchInProgress={fetchInProgress}
      />
      {solution && <SolutionDisplay solution={solution} />}
    </div>
  );
}

export default App;
