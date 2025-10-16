export const rps = (p1: string, p2: string): string => {
  if (p1 === p2) return "Draw!";

  const wins: Record<string, string> = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return wins[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};
