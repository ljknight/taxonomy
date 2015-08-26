var HoneyMakerBee = function() {
  // passes Bee's properties and methods to HMB with this reset to HMB
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// HoneyMakerBee.prototype.eat = Grub.prototype.eat;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}





