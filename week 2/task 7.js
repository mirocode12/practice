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


