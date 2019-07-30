const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic', 5);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur3 = new Dinosaur('Velociraptor', 'herbivore', 35);
    dinosaur2 = new Dinosaur('Velociraptor', 'herbivore', 70);

  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic');
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 5);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurCollection, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.mostPopularDinosaur();
    assert.deepStrictEqual(actual, dinosaur2);

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findSpecies('Velociraptor');
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeAllOfSpecies('Velociraptor');
    const actual = park.findSpecies('Velociraptor');
    assert.deepStrictEqual(actual, []);
  });

  it('Calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVistorsPerDay();
    assert.strictEqual(actual, 155);
  });

  it('Calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 56575);
  });

  it('Calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenueForYear();
    assert.strictEqual(actual, 282875);
  });

});
