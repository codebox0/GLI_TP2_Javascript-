const request = require("request");
const playerUtils = require("./playerUtils");
const playerGenerator = require('./playerGenerator');
const hp = 20;

class Player {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.displayMyPlayerInfo = playerGenerator.displayMyPlayerInfo;
    this.fight = playerUtils.fight;
  }

  /**
   * 
   * @param {player to fight} player2 
   */
  async fightt(player2) {
    try{
      const res = await promiseResponse();
      return this.fight(player2,res);
    } catch(error){
      console.log(error);
      return 1;
    }
  }

}

class PayToWinPlayer extends Player {
  constructor(name, attack, defense) {
    super(name, attack + (attack * 40) / 100, defense);
  }
}

// Begin Prototype System

// const PayToWinPlayer = function(name, attack, defense) {
//     this.attack = attack + (attack * 40 / 100);
//     this.name = name;
//     this.defense = defense;
// }

// function Player(name, attack, defense){
//     this.name = name;
//     this.attack = attack;
//     this.defense = defense;
//     this.hp = hp;

// }

// prototype system
// Player.prototype.getMyPlayerRatio = playerUtils.getMyPlayerRatio;
// Player.prototype.fight = playerUtils.fight;
// Player.prototype.displayMyPlayerInfo = playerGenerator(this.name,this.attack,this.defense).displayMyPlayerInfo;

//async Mamadou

/**
 * 
 */
async function playerNumberGenerator(){
  let  result = [];
  let last = 100;
  for (let i = 0; i < 10; i++) {
      last = await playerAsyncNumberGenerator(1, parseInt(last * 1.2));
      result.push(last);        
      last = last > 1 ? last : 1 + 2;
  }
  console.log("test result : ", result);
  return result;
}

/**
 * 
 * @param {min number to generate} min 
 * @param {max number to generate} max 
 */
function playerAsyncNumberGenerator(min, max){
  return new Promise(function(resolve, reject){
      request(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`, 
      function(error, response, body){
          if(error){
              reject("error throw : ", error);
          }
          else {
              resolve(JSON.parse(body));
          }
      });
  });
}

playerAsyncNumberGenerator(2,19)
.then(function(result){
  console.log("arriver effectuer : ", result);
  return  result;
})
.catch(function (error) {
  console.log("arriver effectuer : ", error);    
})
.finally(function(){
  console.log("arriver effectuer : ");   
})

//async Abdellah
// function someAsuncOperation(min, max) {
//   return new Promise(function(resolve, reject) {
//     request.get(
//       `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
//       function(error, response) {
//         if (error) {
//           reject("An error occured");
//         } else {
//           resolve(
//             parseInt(response.body.substring(0, response.body.length - 1))
//           );
//         }
//       }
//     );
//   });
// }

// async function asuncFunc() {
//   let arr = [];
//   let result = await someAsuncOperation(1, 100);
//   arr.push(result);
//   for (let i = 1; i < 10; i++) {
//     let m = result * 1.2;
//     if (m < 2) {
//       m = m * 2;
//     }
//     m = Math.round(m);

//     result = await someAsuncOperation(1, m);
//     arr.push(result);
//   }
//   return arr;
// }

/**
 * 
 */
function promiseResponse() {
  return new Promise(function(resolve, reject) {
    // asuncFunc()
    playerNumberGenerator()
      .then(res => {
        newRes = res.filter(x => x < 10);
        newRes = newRes.map((x, i) => {
          if (x === i) {
            return x * 2;
          }
          return x;
        });
        let v = newRes.reduce((acc, currentvalue) => acc + currentvalue);
        v = v / 100;
        resolve(v);
      })
      .catch(error => reject(error));
  });
}


// End Prototype System
module.exports = {
  player: Player,
  PayToWinPlayer: PayToWinPlayer,
};
