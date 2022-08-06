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

console.log(this);

// or

function hello() {
  console.log(this);
}
hello();

/* 
當脫離了物件導向時，因為javaScript 可以隨時存取this的特性
當試圖存取this 時，this 會指向最上層的物件，也就是global object 
而 global object 在不同的執行環境（Execution Context）下創造出來的 global object 都不一樣
在瀏覽器環境之下創造出來的就是 Window ,而在 Node 環境裡面創造出來的為 global

嚴格模式底下就都是undefined
非嚴格模式，瀏覽器底下是window
非嚴格模式，node.js 底下是global
*/

const obj = {
  value: 1,
  hello: function () {
    console.log(this, 'OBJ');
  },
};

obj.hello(); // 1

//為甚麼會需要單例模式
//https://b-l-u-e-b-e-r-r-y.github.io/post/JSDesignPattern01/

/* 
this
new 
constructor 
super
確切做了甚麼以及用途
*/
