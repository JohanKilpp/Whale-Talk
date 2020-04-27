const input = 'I love my Tiny Bunny!';
const vowels = ['a','e','i','o','u'];

const resultArray = [];

for ( let i = 0; i < input.length; i ++ ){
  //console.log(i);
  for (let j = 0; j < vowels.length; j ++ ){
    //console.log(j);
    if (input[i] === vowels[j]){
        resultArray.push(vowels[j]);
    }
  }
if (input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
  }
      
    
  
}
console.log(resultArray.join('').toUpperCase());     
     
