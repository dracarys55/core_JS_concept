/* AsyncHistory */
/* 
AJAX = Asynchronous JavaScript And XML.
一開始請求的資料格式是使用 XML，後來才改變成我們熟知的JSON格式
參考好文 :https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html
*/
//
//
//
//
//
//
const button = document.getElementById('button');
button.addEventListener('click', () => {
  getJokeData();
});
//
//
//
//
//
//
/* 這是最一開始呼叫的方式，使用 XMLHttpRequest 這個物件 

在今天瀏覽器功能相當強大，以及網站應用功能複雜的時代，XHR早就已經不敷使用，它在架構上明顯的有太多的問題，
尤其在很多功能的應用情況，程式碼會顯得複雜且不易維護。除非你是有一定要使用原生JavaScript的強迫症，要不然現在要作AJAX功能時，
程式設計師並不會使用原生XHR物件來撰寫，大部份時候會使用外部函式庫。因為一個AJAX的程式，並不是單純到只有對XHR的要求與回應這麼簡單，
例如你可能會對伺服器要求一份資料，當成功得到資料後，後面還有需要進一步的資料處理流程，
這樣就會涉及到異步程式的執行結構，原生XHR並沒有提供可用的方式，它只是單純的做與伺服器互動那件事而已
*/
let getJokeData_2 = () => {
  function afterGetData() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    const myData = document.getElementById('myData');
    data.jokes.forEach((index) => {
      if (index.setup) {
        const li = document.createElement('li');
        myData.appendChild(li);
        li.innerHTML = index.setup + '' + index.delivery;
      } else {
        const li = document.createElement('li');
        myData.appendChild(li);
        li.innerHTML = index.joke;
      }
    });
  }
  const req = new XMLHttpRequest();
  /* 用 XMLHttpRequest 中的 onload 事件，該事件的意思是「當資料全部跑完以後，才會觸發此事件」 */
  req.onload = afterGetData;
  req.open('get', 'https://v2.jokeapi.dev/joke/Programming?amount=5', true);
  req.send();
};
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
/* 
ES6 出現了救世主 Fetch API + Promise

Fetch 並不是一個單純的XHR擴充加強版或改進版本，它是一個用不同角度思考的設計，雖然是可以作類似的事情。此外，
Fetch 還是基於Promise語法結構的，而且它的設計足夠低階，這表示它可以依照實際需求進行更多彈性設定。相對於XHR的功能來說，
Fetch 已經有足夠的相對功能來取代它，但Fetch並不僅於此，
它還提供更多有效率與更多擴充性的作法。 */

// fetch 會回傳一個 Promise 物件
// then 作為下一步
// catch 作為錯誤回應 (404, 500…)

const getJokeData_3 = () => {
  fetch('https://v2.jokeapi.dev/joke/Programming?amount=1', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'text/json',
    }),
  })
    .then((response) => response.json())
    .then((json) => getData(json));
};

function getData(json) {
  const myData = document.getElementById('myData');
  json.jokes.forEach((index) => {
    if (index.setup) {
      const li = document.createElement('li');
      myData.appendChild(li);
      li.innerHTML = index.setup + '' + index.delivery;
    } else {
      const li = document.createElement('li');
      myData.appendChild(li);
      li.innerHTML = index.joke;
    }
  });
}

/* 但要注意的是fetch在只要在伺服器有回應的情況下，都會回傳已實現的Promise物件狀態(只要不是網路連線問題，或是伺服器失連等等)，
在這其中也會包含狀態碼為錯誤碼(404, 500...)的情況，所以在使用時還需要加一下檢查: */

/* fetch(request)
  .then((response) => {
    //ok 代表狀態碼在範圍 200-299
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  })
  .catch(function (err) {
    // Error :(
  }); */
/* 前因 : 
基於 Promise 的方法相當單純，就是不斷的呼叫 Promise 
函式以及使用 then 來進行鏈接，Promise 可以解決
過巢及串接 callback function 語法不一致等問題，
但它依然在 JS 的同步語言中插入了一段非同步的片段 */
//
/*   ES7 出現了 async、await 進一步簡化了程式碼寫法 */

async function getJokeData() {
  console.log('開始抓'); // 先顯示「開始抓氣象」
  //第一種寫法
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // 帶有 await 的 fetch
  const json = await res.json();
  console.log(json);

  //第二種寫法
  /*  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((json) => console.log(json)); */
}

//明天需理解
~(async function () {
  // ~ 開頭表示直接執行這個 function，結尾有 ()
  const delay = (s) => {
    return new Promise(function (resolve) {
      // 回傳一個 promise
      setTimeout(resolve, s); // 等待多少秒之後 resolve()
    });
  };

  console.log(1); // 顯示 1
  await delay(1000); // 延遲ㄧ秒
  console.log(2); // 顯示 2
  await delay(2000); // 延遲二秒
  console.log(3); // 顯示 3
})();
