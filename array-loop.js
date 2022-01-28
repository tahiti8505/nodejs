var number = [1,400,12,34];
var i = 0;
var sum = 0;
while(i<number.length){
  console.log(number[i]);
  sum = sum +number[i];
  i= i+1;
}
console.log(sum);
console.log('sum : ' + sum);
console.log(`sum : ${sum}`);
