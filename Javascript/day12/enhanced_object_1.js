let obj1 = {
  a:10,
  b:20,
  f1:function(){
    console.log(this.a + this.b);
}
};

let Username = "MyObject";
let user = {
  Username,
  greet(){
    console.log(`Hello, ${this.Username}`);
  }
}
user.greet (); // Hello, MyObject