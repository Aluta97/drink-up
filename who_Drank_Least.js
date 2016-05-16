module.exports = function(day,drink,max){

  var min = max;
  var name = {};

  day.forEach(function(person){
    if(person[drink] < min){
      min = person[drink];
  name = {
           people : person.person
      };
    }
  });
//  console.log(name.people);
  return name.people;
}
