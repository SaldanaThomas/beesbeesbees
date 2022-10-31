var ForagerBee = function(color, food, eat) {
  Bee.call(this, color, food, eat);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = new Bee();

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(item) {
  this.treasureChest.push(item);
};