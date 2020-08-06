import React from "react";
import "./styles/main.scss";
import { CardSelectionGrid } from "./components/card-selection-grid";
import { Solution } from "./types";
import { SolutionDisplay } from "./components/solution-display";

// const mockSolution: Solution = {
//   pyramid: [
//     [1, 3, 5, 8],
//     [12, 15, 16, 18, 4],
//     [32, 35, 37],
//   ],
//   score: 12,
// };

function App() {
  const [solution, setSolution] = React.useState<Solution | null>(null);
  const [error, setError] = React.useState<string | null>(null);
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

      const solution = await response.json();
      setSolution(solution);
      setFetchInProgress(false);
      setError(null);
    } catch (e) {
      console.error(e);
      setError(e.toString());
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
      {error && (
        <div className="error-container">
          {error}. Please see console for full details.
        </div>
      )}
    </div>
  );
}

export default App;
