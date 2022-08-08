class Dog {
  setName(name) {
    this.name = name;
    console.log(this);
    //這邊沒有脫離物件，所以會指到該 instance
  }
}

const dog = new Dog();
dog.setName('husky');

const dog_2 = new Dog();
dog.setName('golden retriver');

/*
 為什麼要這樣寫？因為這是唯一的方法，不然你要把 name 這個屬性存在哪裡？
沒有其他地方讓你存了。所以 this 的作用在這裡是顯而易見的，
所指到的對象就是那個 instance 本身。

一但脫離了物件導向，其實 this 就沒有什麼太大的意義
 */
//
//
//
//
console.log(this);

// or

function hello() {
  console.log(this);
}
hello();

/* 
當脫離了物件導向時，因為 javaScript 可以隨時存取this的特性
當試圖存取 this 時，this 會指向最上層的物件，也就是 global object 
而 global object 在不同的執行環境（Execution Context）下創造出來的 global object 都不一樣
在瀏覽器環境之下創造出來的就是 Window ,而在 Node 環境裡面創造出來的為 global

嚴格模式底下就都是undefined
非嚴格模式，瀏覽器底下是window
非嚴格模式，node.js 底下是global
*/
//
//
//
//
/* 如何更改 this 的值 */
function hello_2(a, b) {
  console.log(this, a, b, 'hello_2');
}
//第一個參數為要綁定的值
hello_2.call('jack', 1, 2);
hello_2.apply('jack', [1, 2]); //apply 是傳一個陣列進去

function hell() {
  console.log(this, 'hell');
}

const myHell = hell.bind('my');
myHell(); // my
// 實際應用 : react class component  也會在建構子時綁定相關事件，為了確定this 會永遠指向對應的 this
// 或使用箭頭函式

const obj = {
  value: 1,
  hello: function () {
    console.log(this.value);
  },
  inner: {
    value: 2,
    hello: function () {
      console.log(this.value);
    },
  },
};

const obj2 = obj.inner;
const hello = obj.inner.hello;
obj.inner.hello();
obj2.hello();
hello();
//
//
//
//
//
//答案
// obj.inner.hello.call(obj.inner); //2
// obj2.hello.call(obj2); //2
// hello.call();//undefined
//
//
//
//
//

var x = 10;
var obj_test = {
  x: 20,
  fn: function () {
    var test = function () {
      console.log(this.x);
    };
    test();
  },
};

obj_test.fn();
//
//
//
//
//
//
//
//答案
//test.call()  test.call()就是預設綁定，this的值就會是 window，所以this.x會是 10
//
//
//
//
//
//
/* 補充: 箭頭函式做了甚麼 */

x = 'global';
const obj_test2 = {
  x: 1,
  hello: function () {
    // 這邊印出來的 this 是什麼，test 的 this 就是什麼
    // 就是我說的：
    // 在宣告它的地方的 this 是什麼，test 的 this 就是什麼
    console.log(this);
    const test = () => {
      console.log(this.x);
    };
    test();
  },
};

obj_test2.hello();
const hello = obj_test2.hello;
hello();

/* 要看 this，就看這個函式「怎麽」被呼叫 */
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
/* 補充 : new  到底做了甚麼 */

// 這是建構子
function Dog(name) {
  this.name = name;
}
//原型練直接綁定事件
Dog.prototype.getName = function () {
  return this.name;
};
//原型練直接綁定事件
Dog.prototype.sayHello = function () {
  console.log(this.name);
};

let a = new Dog('husky');
a.sayHello();
let b = newDog('golden retriver');
b.sayHello();
function newDog(name) {
  let obj = {};
  Dog.call(obj, name); //call 第一個參數為 this 的值，這邊為 {} ,第二個參數name ，Dog 會接到 並且指定this.name 會為name 的值
  console.log(obj);
  obj.__proto__ = Dog.prototype; // 此 obj 的原型會是 Dog 的 prototype ，這樣才能後續使用 sayHello() 這個功能
  return obj; //回傳做好的obj
}
/* 
new 做了 :
1.產生新物件
2.初始化，新的物件 Dog.call(obj, name);
3.綁定此物件的原型到原來的原型
4.返回此物件
*/

/*   物件導向 :單例模式
目的在為全域環境提供一個單一的實例，確保只有一個單一實例
優點:不意混淆，知道只有一個單一的實例
 */

/* 
this :指向這個實例 (instance) 本身
new : 做出這個 class 的實例。舉例: 汽車的設計圖 (class)， 真的做出一台汽車 (new)
constructor :在建構這台汽車時，想加入的參數。 舉例:這台汽車的品牌是: Benz 顏色是:Black 配備有 : 自動駕駛功能 (method)
super : 用來指定要繼承原來的super class 又叫做parent class。 舉例: 特斯拉是子物件，他繼承自汽車這個母組件，而汽車有共同的屬性
，例如他們都有四個輪子，都有方向盤。

*/
