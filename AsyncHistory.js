/* AsyncHistory */
/* 
AJAX = Asynchronous JavaScript And XML.
一開始請求的資料格式是使用 XML，後來才改變成我們熟知的JSON格式
*/
/* 可以用joke API 當範例 */
/* fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json)); */
/* 
function reqListener() {
  const data = JSON.parse(this.responseText);
  console.log(data);
}
const req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get', 'https://jsonplaceholder.typicode.com/todos?userId=1', true);
req.send(); */

let example = new Promise((resolve, reject) => {
  resolve('resolve');
  console.log('resolve');
});

example.then((d) => {
  console.log(d);
});
