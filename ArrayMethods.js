const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name);
/* console.log(names); */
//2. Get array of all heights
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => {
  return {
    name: character.name,
    height: character.height,
  };
});
/* console.log(minifiedRecords); */
//4. Get array of all first names
const firstNames = characters.map((character) => {
  return character.name.split(' ')[0];
});
/* console.log(firstNames) */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
/* console.log(totalMass) */
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => {
  return acc + cur.height;
}, 0);
/* console.log(totalHeight) */
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
  const eye_color = cur.eye_color;
  if (acc[eye_color]) {
    acc[eye_color]++;
  } else {
    acc[eye_color] = 1;
  }
  /* 這個 acc 其實一開始是個obj 
  你要加完之後return他回去
  */
  return acc;
}, {});
/* console.log(charactersByEyeColor) */
//4. Get total number of characters in all the character names

const charactersByNames = characters.reduce((acc, cur) => {
  const name = cur.name;
  if (acc[name]) {
    acc[name]++;
  } else {
    acc[name] = 1;
  }
  /* 這個 acc 其實一開始是個obj 
    你要加完之後return他回去
    */
  return acc;
}, {});
/*   console.log(charactersByNames) */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Character = characters.filter(
  (character) => character.mass > 100
);
/* console.log(greater100Character); */

//2. Get characters with height less than 200
const less200Character = characters.filter(
  (character) => character.height < 200
);
/* console.log(less200Character); */

//3. Get all male characters
const maleCharacter = characters.filter(
  (character) => character.gender === 'male'
);
/* console.log(maleCharacter); */
//4. Get all female characters
const femaleCharacter = characters.filter(
  (character) => character.gender === 'female'
);
/* console.log(femaleCharacter); */

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* https://medium.com/@leokao0726/%E6%B7%BA%E8%AB%87-js-sort-%E5%88%B0%E8%83%8C%E5%BE%8C%E6%8E%92%E5%BA%8F%E6%96%B9%E6%B3%95-1035f5b8cde8
  sort 背後的排序方法
*/
//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => {
  return a.mass - b.mass;
});
/* console.log(byMass); */

//2. Sort by height
const byHeight = characters.sort((a, b) => {
  return b.height - a.height;
});
/* console.log(byHeight); */
//3. Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
/* console.log(byName); */
//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  return 1;
});
/* console.log(byGender); */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color === 'blue'
);
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?
/* done eazy */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//***SOME***
//1. Is there at least one male character?
const oneMaleChar = characters.some((character) => {
  return character.gender === 'male';
});
/* console.log(oneMaleChar);  */
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

let newArr = [];
characters.forEach((character) => {
  character.gender = character.gender + 'test';
  newArr.push(character);
});

console.log(characters);
console.log(newArr);
/* 
forEach 會改變原陣列

迴圈用法 for ,forEach, while 差別
*/
