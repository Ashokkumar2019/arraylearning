let a=[1,2,3,4,5,6]
// let t=a.at(-3);
// console.log(t)
// let t=parseInt(prompt("enter no"))
function f1(index){
    index=index>=0? index : a.length+index;
    console.log(a[index])
}
f1(-2);
