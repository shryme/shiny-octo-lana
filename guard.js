
module.exports = function (creep) {
  var target = creep.pos.findClosest(Game.HOSTILE_CREEPS);
  if(target) {
    creep.say('ATTACK');
    creep.moveTo(target);
    creep.attack(target);
  }
  else {
    var tm = creep.pos.findClosest(Game.MY_CREEPS, {filter: function(object) {return object.memory.role === 'guard' && object.id !== creep.id} });
    if (tm) {
      creep.moveTo(tm);
    }
  }
}