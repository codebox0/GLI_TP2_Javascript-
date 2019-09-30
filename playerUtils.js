function getMyPlayerRatio(player, number) {
    return player.attack - number;
}

function winnerHpAfterFight(player,winnerSubtract, enmySubstract){
    return enmySubstract * (player.hp / winnerSubtract);
}

/**
 * 
 * @param {player to fight} player2 
 * @param {value} value 
 */
function fight(player2,value) {
    console.log('---------------let the fight begin ---------------');
    console.log('-------let the champions present themselves-------');
    this.displayMyPlayerInfo();
    player2.displayMyPlayerInfo();
    const player1Damage = getMyPlayerRatio(this, player2.defense) * value;
    const player2Damage = getMyPlayerRatio(player2, this.defense) * value;
    console.log(this.name+' causes '+ player1Damage + ' damage ');
    console.log(player2.name+' causes '+ player2Damage + ' damage ');
    const winner1 = false;
    if(player1Damage === player2Damage && this.hp === player2.hp){
        if(Math.random() > 0.5) {
            winner1 = true;
        }
    }
    if(player1Damage > player2Damage || winner1) { //winner player1
        console.log("------the winner is "+ this.name +'---------------');
        player2.hp = 0;
        this.hp = winnerHpAfterFight(this,player1Damage,player2Damage);
        this.displayMyPlayerInfo();
    }else { //winner player2
        console.log("------the winner is "+ player2.name +'---------------');
        this.hp = 0;
        player2.hp = winnerHpAfterFight(player2,player2Damage,player1Damage);
        player2.displayMyPlayerInfo();
    }
}

module.exports = {
    getMyPlayerRatio: getMyPlayerRatio,
    fight: fight
}
