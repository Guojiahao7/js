/**
 * Created by qile on 2017/8/14.
 */
var a1 = [,"abc"];
console.log(a1.length);
//2
for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);
//1 abc
//false true
var a2 = new Array(3);
console.log(a2.length);
console.log(a2);
//3
//[empty x 3]
//注意：
var a3 = [,,];
console.log(a3.length);
//2
console.log(["a","b"].length);//2
console.log(["a","b",].length);//2
console.log(["a","b",,].length);//3