var how_Many_Drinks = require('../how_Many_Drinks');
var who_Drank_Least = require('../who_Drank_Least');
var who_Drank_Most = require('../who_Drank_Most');
var drinks_Person = require('../drinks_Person');
var assert = require('assert');

var Monday = [{
  "person": "Mdu",
  "coffee": 5,
  "tea": 0,
  "water": 3
}, {
  "person": "Brenda",
  "coffee": 1,
  "tea": 3,
  "water": 1
}, {
  "person": "Lesego",
  "coffee": 0,
  "tea": 4,
  "water": 2
}];

var Tuesday = [{
  "person": "Lesego",
  "tea": 3,
  "water": 1,
  "coffee": 1
}, {
  "person": "Mdu",
  "tea": 0,
  "water": 5,
  "coffee": 7
}, {
  "person": "Brenda",
  "tea": 4,
  "water": 0,
  "coffee": 2
}];

var Wednesday = [{
  "person": "Brenda",
  "water": 4,
  "coffee": 3,
  "tea": 2
}, {
  "person": "Lesego",
  "water": 4,
  "coffee": 0,
  "tea": 3
}, {
  "person": "Mdu",
  "water": 9,
  "coffee": 8,
  "tea": 2
}];


var Thursday = [{
  "person": "Mdu",
  "tea": 0,
  "coffee": 5,
  "water": 3
}, {
  "person": "Brenda",
  "coffee": 1,
  "water": 1,
  "tea": 3
}, {
  "person": "Lesego",
  "water": 2,
  "coffee": 0,
  "tea": 4
}];


var Friday = [{
  "person": "Brenda",
  "tea": 3,
  "coffee": 1,
  "water": 1
}, {
  "person": "Lesego",
  "tea": 4,
  "water": 2,
  "coffee": 0
}, {
  "person": "Mdu",
  "water": 3,
  "tea": 0,
  "coffee": 5
}];

describe('drinkup test', function() {
  it('it should return the total number of coffee were drunk on monday', function() {
    assert.equal(how_Many_Drinks(Monday, "coffee"), 6)
  })
  it('it should return the total number of tea were drunk tuesday', function() {
    assert.equal(how_Many_Drinks(Tuesday, "tea"), 7)
  })
  it('it should return the total number of tea were drunk tuesday', function() {
    assert.equal(how_Many_Drinks(Wednesday, "water"), 17)
  })

  it('it should return who drank the least coffee  on monday', function() {
    assert.equal(who_Drank_Least(Monday, "coffee", 5), "Lesego")
  })
  it('it should return who drank the least water on wednesday', function() {
    assert.equal(who_Drank_Least(Wednesday, "water", 9), "Brenda")
  })
  it('it should return who drunk the least coffee on thursday', function() {
    assert.equal(who_Drank_Least(Thursday, "coffee", 5), "Lesego")
  })

  it('it should return the total number of coffees were drunk on thursday', function() {
    assert.equal(how_Many_Drinks(Thursday, "coffee"), 6)
  })
  it('it should return the total number of teas were drunk on thursday', function() {
    assert.equal(how_Many_Drinks(Thursday, "tea"), 7)
  })
  it('it should return the total number of waters were drunk on thursday', function() {
    assert.equal(how_Many_Drinks(Thursday, "water"), 6)
  })

  it('it should return who drunk the least water on thursday', function() {
    assert.equal(who_Drank_Least(Thursday, "water", 3), 'Brenda')
  })
  it('it should return who drunk the most tea on tuesday', function() {
    assert.equal(who_Drank_Most(Tuesday, "tea", 0), 'Brenda')
  })
  it('it should return who drunk the most tea on thursday', function() {
    assert.equal(who_Drank_Most(Thursday, "tea", 0), 'Lesego')
  })

  it('it should return the total number of coffees drunk on monday', function() {
    assert.equal(drinks_Person(Monday, "coffee", "Lesego"), 0)
  })
  it('it should return the total number of teas drunk on tuesday', function() {
    assert.equal(drinks_Person(Tuesday, "tea", "Brenda"), 4)
  })
  it('it should return the total number of waters drunk on wednesday', function() {
    assert.equal(drinks_Person(Wednesday, "water", "Mdu"), 9)
  })

})
