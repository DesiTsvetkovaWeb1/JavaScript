/**
 * 
 */

var arr1 =[1,'a', 1, 1, 11, 11 , 11, 11,'a', 2, 2, 2,4, 2, 11, 11,'a', 11, 11,'a' ,11, 'a', 'a', 'a','a'];
arr1.sort();
console.log(arr1);
var i;
var n = 1;
var maxI = 0;
var symbol;

for(i = 0; i< arr1.length; i++){
	if(arr1[i] === arr1[i+1]){
		n++;
	}
	else if(n > maxI){
		maxI = n;
		symbol = arr1[i];
		n=1;
	}
	else{
		n= 1;
	}
}
console.log(symbol,'(', maxI,' times)');