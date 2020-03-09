const biggify = function(x){
return x +9000;

}


const nasafy = function(x){
let arr = [];
for(let i = x; i > 0; i-- ){
arr.push(i)
}
arr.push('Blast off!')

return arr
}

const reversify = function(str){
  let newS= '';
  for (let i = str.length - 1; i >= 0; i-- ){
    newS = newS + str[i];
  }
  return newS ;
}

const titleify = function(str){
  let newStr = '';
  for (let i = 0; i < str.length; i++ ){
    if(str[i-1] === ' ' || i === 0){
      newStr = newStr + str[i].toUpperCase();
    } else {
    newStr = newStr + str[i].toLowerCase();
    }
  }
return newStr;
}


const crazify = function(str){
  let result = '';
  let count = 1;
    for (let i = 0; i < str.length; i++){
    if (str[i] !== ' '){
        count++;
      }
    if(count % 2 === 1){
        result = result + str[i].toUpperCase();
  } else {
        result = result + str[i].toLowerCase();
      }
    }
    return result; 
  }


if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
