module.exports = function(day,drink,max){

  var min = max;
  var name = {};

  day.forEach(function(person){
    //console.log(person[drink]);
    if(person[drink] < min){
      min = person[drink];
  name = {
           People : person.person
      };
    }
  });
//  console.log(name.People);
  return name.People;
}
