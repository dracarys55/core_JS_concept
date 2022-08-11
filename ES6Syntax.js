/* ES6Syntax */

// Template literals  又叫作樣板書寫，你制定好樣板，別人套版即可
/* using backtick (`) 去解決一般字串遇到的問題
1.無法多行書寫
2.要加入變數要一直用 + 號，很煩
*/

const myName = 'jack';
const subject = 'ES6';
const cueerntTime = new Date();
const hello = `
hi,
${myName}
Do 
you 
wanna
learn 
${subject}?

${cueerntTime}
right 
now?
`;

/* console.log(hello); */
//
//
//
//
//
//
//
//
//

/* Destructuring：解構 */

// 換句話說他會去提煉你 obj (包含array )裡面的key value pair
// react 的 props 也會是這樣傳，他基本就是傳一個 object 到子組件 ，
//所以會需要解構它去提取其中你需要用到的值
//不需要去一直props.age props.name之類的

//物件解構
const person = {
  age: '28',
  subject: 'js',
  name: 'jack',
};
const { name, age } = person;
console.log(age);

//nested obj Destructuring：解構
const person_nested = {
  age_nested: '28',
  subject_nested: {
    lan: 'js',
  },
  name_nested: 'jack',
};
const {
  name_nested,
  age_nested,
  subject_nested: { lan }, //解構只會解構到最後一層，也就是 lan 如果你試圖想要印出 subject_nested 是沒東西的
} = person_nested;
console.log(lan, 'subject_nested ==> lan');

//react 看到的用法 參數解構
const reatComponent = ({ a_reactObj }) => {
  console.log(a_reactObj);
};
reactObj = {
  a_reactObj: 'hello',
  b_reactObj: 'Jack',
};
reatComponent(reactObj);
//
//
//
//
//
//
//
//
//

/* 陣列解構 */

const arr = ['鬼屋', '到底', '要幾點'];
const [one, two] = arr; //陣列解構需要用 []
//第一個就一定代表第一個的值，不像物件解構，不管在哪都抓得到那個key
console.log(one);

// Spread Operator 展開他
const obj_spread = {
  name: 'jjjj',
  age: 'ccccc',
};

const newobj = {
  ...obj_spread,
};

console.log(newobj);

/* 
react 寫法

沒有 spread operator 你會長這樣 
 const person = {
    id: 1,
    name: "kaptan",
    age: 30,
    skill: "react"
  };
  // const personsList = (
  //   <Person
  //     id={person.id}
  //     name={person.name}
  //     age={person.age}
  //     skill={person.skill}
  //   />
  // );

  // 有了 spread operator
  const personsList = <Person {...person} />;
*/

//
//
//
//
//
//
//
//

/* 「反向」的展開：Rest Parameters */

function add(...args) {
  console.log(args);
  return args[0] + args[1];
}
console.log(add(1, 2));
//
//
//
//
//
//
//
/* 加上預設值：Default Parameters */

function repeat(name = 'jack') {
  console.log(name);
}
repeat(); // 沒傳東西都有預設的param
