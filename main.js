var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var sniper = require('sniper');
var healer = require('healer');

var factory = require('factory');

var road = require('road');

debugger
var testGlobal = 0;
testGlobal = 5;

var factoryData = {};
factoryData.harvesterNumbers = 0;
factoryData.builderNumbers = 0;
factoryData.guardNumbers = 0;
factoryData.healerNumbers = 0;
factoryData.harvesterSmallestTimeToLive = undefined;

for(var name in Game.creeps) {
  var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
		factoryData.harvesterNumbers++;

		if (factoryData.harvesterSmallestTimeToLive === undefined || factoryData.harvesterSmallestTimeToLive > creep.ticksToLive)
		  factoryData.harvesterSmallestTimeToLive = creep.ticksToLive;
	}
	else if(creep.memory.role == 'builder') {
		builder(creep);
		factoryData.builderNumbers++;
	}
	else if(creep.memory.role == 'guard') {
    guard(creep);
    factoryData.guardNumbers++;
  }
  else if(creep.memory.role == 'sniper') {

    sniper(creep);
    factoryData.guardNumbers++;
  }
  else if (creep.memory.role == 'healer') {
    healer(creep);
    factoryData.healerNumbers++;
  }
}

if (factoryData.harvesterSmallestTimeToLive === undefined)
  factoryData.harvesterSmallestTimeToLive = 0;

factory.createRobotz(factoryData);

