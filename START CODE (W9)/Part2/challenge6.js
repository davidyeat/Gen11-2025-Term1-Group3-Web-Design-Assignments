// Simulate a voting system for three candidates (A/B/C)
// Count votes and declar a winner

function countVote(votes) {
  if (votes.length === 0) {
    return "There is not vote yet";
  }

  // Count votes
  let countA = 0;
  let countB = 0;
  let countC = 0;

  for (let vote of votes) {
    if (vote === 'A') countA++;
    else if (vote === 'B') countB++;
    else if (vote === 'C') countC++;
  }

  // Find the highest vote count
  let maxVote = Math.max(countA, countB, countC);

  // Find all winners
  let winners = [];
  if (countA === maxVote) winners.push("A");
  if (countB === maxVote) winners.push("B");
  if (countC === maxVote) winners.push("C");

  // Format output based on number of winners
  if (winners.length === 1) {
    return `${winners[0]} is the winner`;
  }

  if (winners.length === 2) {
    return `${winners[0]} and ${winners[1]} are both winners`;
  }

  // If all 3 are equal
  return "A, B and C are all winners";
}


const vote1 = ['A', 'B', 'A', 'C', 'A'];
const vote2 = ['A', 'B', 'B', 'C', 'A'];
const vote3 = [];

console.log(countVote(vote1));
console.log(countVote(vote2));
console.log(countVote(vote3));
