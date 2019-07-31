const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let index = this.dinosaurCollection.indexOf(dinosaur);
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

// Park.prototype.mostPopularDinosaur = function () {
//   let currentMax = this.dinosaurCollection[0];
//   for (let dinosaur of this.dinosaurCollection) {
//     popularity = dinosaur.guestsAttractedPerDay;
//     if (popularity > currentMax.guestsAttractedPerDay){
//        currentMax = dinosaur;
//     }
//   };
//   return currentMax;
// };

Park.prototype.findSpecies = function (species) {
  let specificSpecies = [];
  for (let dinosaur of this.dinosaurCollection){
    if (dinosaur.species === species){
      specificSpecies.push(dinosaur);
    };
  };
  return specificSpecies;
};

// Park.prototype.removeAllOfSpecies = function (species) {
//   let toBeRemoved = this.findSpecies(species);
//   for (dinosaur of toBeRemoved) {
//     this.removeDinosaur(dinosaur);
//   };
// };

Park.prototype.removeAllOfSpecies = function (species) {
  let dinosaursToKeep = [];
  for (let dinosaur of this.dinosaurCollection) {
    if (dinosaur.species !== species){
    dinosaursToKeep.push(dinosaur);
    };
  };
  this.dinosaurCollection = dinosaursToKeep;
};

Park.prototype.totalVistorsPerDay = function () {
  let totalVistors = 0
  for (dinosaur of this.dinosaurCollection) {
    totalVistors += dinosaur.guestsAttractedPerDay;
  };
  return totalVistors;
};

Park.prototype.totalVisitorsPerYear = function () {
  const visitorsPerDay = this.totalVistorsPerDay();
  return visitorsPerDay * 365;
};

Park.prototype.totalRevenueForYear = function () {
  const totalVistors = this.totalVisitorsPerYear();
  return totalVistors * this.ticketPrice;
};

Park.prototype.diets = function () {
  let diets = {};
  for (let dinosaur of this.dinosaurCollection) {
    if(diets[dinosaur.diet]) {
      diets[dinosaur.diet] += 1;
    } else {
      diets[dinosaur.diet] = 1;
    }
  }
  return diets;
};
module.exports = Park;
