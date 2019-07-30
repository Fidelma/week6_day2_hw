const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(index,1);
};


Park.prototype.mostPopularDinosaur = function () {
  var currentMax = this.dinosaurCollection[0];
  for (dinosaur of this.dinosaurCollection) {
    popularity = dinosaur.guestsAttractedPerDay;
    if (popularity > currentMax.guestsAttractedPerDay){
      var currentMax = dinosaur;
    }
  };
  return currentMax;
};

Park.prototype.findSpecies = function (species) {
  const specificSpecies = [];
  for (dinosaur of this.dinosaurCollection){
    if (dinosaur.species === species){
      specificSpecies.push(dinosaur);
    };
  };
  return specificSpecies;
};

Park.prototype.removeAllOfSpecies = function (species) {
  const toBeRemoved = this.findSpecies(species);
  for (dinosaur of toBeRemoved) {
    this.removeDinosaur(dinosaur);
  };
};
module.exports = Park;
