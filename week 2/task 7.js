/** Write a program to compare two objects to determine if the first one contains equivalent
 * property values to the second one
 */

function compareValues(obj1, obj2) {
  return Object.keys(obj2).every(
    (key) => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]
  );
}

compareValues({ age: 25, beard: true }, { age: 25, hair: "long", beard: true }); // false
compareValues({ age: 25, hair: "long", beard: true }, { age: 25, beard: true }); // true

/** Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and 
a non-empty word in s.*/

function wordPattern(pattern, s) {
  let patternHolder = {};
  s = s.split(" ");
  if (pattern.length === s.length) {
    for (i = 0; i < s.length; i++) {
      if (patternHolder[pattern[i]] && patternHolder[pattern[i]] !== s[i]) {
        return false;
      }else{
        patternHolder[pattern[i]] = s[i];
      }
    }
    return true;
  }else{
    return false;
  }
}

wordPattern("abba", "cat car car cat") // true
wordPattern("abba", "cat car cat cat") // false
