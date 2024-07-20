// let a=[1,2,3,4,5]
// let sum=0;
// for(i=0;i<a.length;i++){
    
//     sum=sum+a[i];
    
// }
// console.log(sum);
let a=[1,2,3,4,5,7,11,15,0,17,-1,22,25,67,98,34]
// let even=0;
// let odd=0;
// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//        even++;
//     }else{
//         odd++
//     }
// }
// console.log("total even no are=",even," total odd no is =",odd)
let big=a[0];
let small=a[0];
for(i=1;i<a.length;i++){
if(big<a[i]){
big=a[i];
} if(small>a[i]){
 small=a[i];
}

   
}
console.log("biggest=",big," smallest =",small)