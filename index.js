
function countDice(dice) {
    const counts = {};
    for (const die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }
    return counts;
}
function getThreeOfAKind(dice) {

    const counts = countDice(dice);
    
    for (const key in counts) {
        if (counts[key] >= 3) {
            return 28;
        }
    }
    return 0;
}

function getFourOfAKind(dice) {
    
    const counts = {};
  
    for (const die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }
    for (const key in counts) {
      if (counts[key] >= 4) {
        return 35;
      }
    }
    return 0;
}

function getFull(dice) {
    const counts = {};
  
    for (const die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }
    if (Object.keys(counts).length === 2) {
        return 30;
    }
    return 0;
}

module.exports = { getThreeOfAKind, getFourOfAKind, getFull };