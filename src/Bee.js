var Bee = function(food, eat) {
  Grub.call(this, food, eat);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = new Grub();

Bee.prototype.constructor = Bee;