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

console.log(hello);

// Destructuring：解構
