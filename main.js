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
  let new = '';
  for (let i = str.length - 1; i >= 0; i-- ){
    new = new + str[i];
  }
  return new ;
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
