module.exports = function(day,drinks){

  var max = 0;
  day.forEach(function(person){
      //console.log(person);
      max = max + person[drinks];
  })
//  console.log(total);
  return max;
}
