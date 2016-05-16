module.exports = function(day,drink,min){

  var max = min;
  var name = {};
  day.forEach(function(person){
      //console.log(person[drink]);
    if(person[drink] > max){
      max = person[drink];
  name = {
             people : person.person
      }
    }
  });
//  console.log(name.People);
  return name.people;
};
