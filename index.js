function getThreeOfAKind(dice) {

    const counts = {};

    for (const die of dice) {
      counts[die] = (counts[die] || 0) + 1;
    }

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
  
module.exports = { getThreeOfAKind, getFourOfAKind };