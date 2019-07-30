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

// Park.prototype.mostPopularDinosaur = function () {
//   // const popularity = this.dinosaurCollection.map(dinosaur => dinosaur.guestsAttractedPerDay);
//   const found = this.dinosaurCollection.find(function(a,b) {return Math.max(a.guestsAttractedPerDay, b.guestsAttractedPerDay)});
//   // const max = this.dinosaurCollection.reduce(function(a, b) {
//   //  Math.max(a.guestsAttractedPerDay, b.guestsAttractedPerDay)});
//   //  return max;
//   return found;
//
//   // return popularity;
// };

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
module.exports = Park;
