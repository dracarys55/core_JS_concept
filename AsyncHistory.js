/* AsyncHistory */
/* 
AJAX = Asynchronous JavaScript And XML.
一開始請求的資料格式是使用 XML，後來才改變成我們熟知的JSON格式
*/
/* 可以用joke API 當範例 */
const result = fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));
setTimeout(() => {
  // response = result.json();
  console.log(result);
}, 3000);
/* 
function reqListener() {
  const data = JSON.parse(this.responseText);
  console.log(data);
}
const req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get', 'https://jsonplaceholder.typicode.com/todos?userId=1', true);
req.send(); */

// let example = new Promise((resolve, reject) => {
//   resolve('resolve');
//   console.log('resolve');
// });

// example.then((d) => {
//   console.log(d);
// });

function get_joke_of_the_day() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      console.log(this.responseText);
    }
  };
  xhttp.open('GET', 'https://api.jokes.one/jod?category=animal', true);
  xhttp.setRequestHeader('Content-type', 'application/json');
  xhttp.setRequestHeader('X-JokesOne-Api-Secret', 'YOUR API HERE');
  xhttp.send();
}

get_joke_of_the_day();

console.log(window.fetch);
