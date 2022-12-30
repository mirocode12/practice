/** The string "PAYPALISHIRING" is written in a zigzag pattern on a
 *  given number of rows like this:
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows.
 */

function convert (s, numRows) {
    const len = s.length;
    if (numRows < 2 || len < numRows) {
      return s;
    }
    const rows = new Array(numRows).fill('');
    let reverse = false;
    let count = 0;
    for (i = 0; i < len; i++) {
      rows[count] += s[i];
      reverse? count--: count++;
      if (count === numRows - 1 || count === 0) {
        reverse = !reverse;
      }
    }
    return rows.join('');
  };

convert("PAYPALISHIRING", 4);
