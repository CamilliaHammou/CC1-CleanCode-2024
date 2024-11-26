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

    const counts = countDice(dice);

    for (const key in counts) {
        if (counts[key] >= 4) {
            return 35;
        }
    }
    return 0;
}

function getFull(dice) {

    const counts = countDice(dice);

    if (Object.keys(counts).length === 2) {
        return 30;
    }
    return 0;
}

function getBigSuite(dice) {

    const sortedDice = dice.sort((a, b) => a - b);

    for (let i = 1; i < sortedDice.length; i++) {
        if (sortedDice[i] !== sortedDice[i - 1] + 1) {
            return 0;
        }
    }
    return 40;
}

function getYams(dice) {

    const counts = countDice(dice);

    if (Object.values(counts).includes(5)) {
        return 50;
    }
    return 0;
}

function getChance(dice) {
    return dice.reduce((sum, die) => sum + die, 0);
}


module.exports = { getThreeOfAKind, getFourOfAKind, getFull, getBigSuite, getYams, getChance};