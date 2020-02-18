/*(function(){
 var a = b = 3;
 })();

console.log(b);
*/

/*
var b = 7;
(function(){
    
    var a = 3;
    console.log(b);
    
})();
//console.log(a);
//console.log(b);*/

/*
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());*/

/*
console.log(typeof(0.1 +0.2));

console.log(3==6);
var y = 6;
console.log(y === '6');
*/
/*
function isInteger(x){
   console.log(typeof(x));
    if(typeof(x)=== 'number'){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
isInteger(4);
*/
/*
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}


*/
/*
let obj = {
    a: 1,
    b: 2,
    c: {
        age : 30
    }
};
var objclone = Object.assign({},obj);
console.log(obj);
console.log(objclone);
*/
/*
var a ={
    b :4,
    c:5
};
 var     d = {
        f:'8'
    }
 
a[d]= 9;
console.log(a);
*/

//naming.
/*
var $muskan = "hello";
console.log($muskan);


var mus$kan = "hi";
console.log(mus$kan);


//var mus%kan = "k"; //cannot use symbols excxept $ or _
//console.log(mus%kan);

var if = "go";  //cannot use keywords as var names.

console.log(if);
*/
/*
var a = 9;
var x = (a===9)?"yes":"no";
console.log(x); 
*/

var a = "abc"+7;
console.log(a);
console.log(typeof(a));