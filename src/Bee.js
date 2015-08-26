var Bee = function() {
  // call Grub superclass - sets 'this' to Bee within Grub's inherited methods and properties
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  // this.food auto inherit from Grub
};

// set the bee prototype
Bee.prototype = Object.create(Grub.prototype);
// set the constructor
Bee.prototype.constructor = Bee;
// eat method auto inherited from grub
//Bee.prototype.eat = Grub.prototype.eat;
