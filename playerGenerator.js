let hp = 20;

const playerUtils = require('./playerUtils');
const fight = playerUtils.fight;

function displayMyPlayerInfo(){
    console.log("My name is "+this.name+",I have " +this.attack+" atack,"+this.defense+" defense and " +this.hp+" health points");
}

function playerGenerator(name, attack, defense) {
    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: hp,
        displayMyPlayerInfo: displayMyPlayerInfo,
        fight: fight
    };
}

module.exports = {
    displayMyPlayerInfo :displayMyPlayerInfo
}