/**
 * You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to
 * guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in
 * said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match
 * the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and
 * hints to eventually derive the secret number.
 *
 * Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls
 * and B to indicate the cows.
 *
 * Please note that both secret number and friend's guess may contain duplicate digits.
 *
 * Input: secret = "1807", guess = "7810"
 * Output: "1A3B"
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  const map = {};
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i++) {
    const s = secret[i];
    const g = guess[i];
    if (s === g) {
      bulls++;
      continue;
    }

    if (map[s] < 0) {
      cows++;
    }

    if (map[g] > 0) {
      cows++;
    }

    map[s] = parseInt(map[s] || '0') + 1;
    map[g] = parseInt(map[g] || '0') - 1;
  }

  return `${bulls}A${cows}B`;
};
