module.exports = function(day, drink, person){

  var min = 1000;
  day.forEach(function(user){
    //console.log(user.person);
    if(user.person === person){
      min = user[drink];
    }
  });
//  console.log(drinks);
  return min;
}
