import { getDiceRollArray, getDicePlaceholderHtml } from "./utilis.js";

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth
function Character(data){
    Object.assign(this, data)
    this.maxHealth = this.health
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(){
         this.currentDiceScore = getDiceRollArray(this.diceCount)
         this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join(" ")
   }
   this.takeDamage = function (attackScoreArray){
    const totalAttackScore = attackScoreArray.reduce((total, num) => {
        return total + num;
    })
     this.health -= totalAttackScore
     if(this.health <= 0){
        this.dead = true;
        this.health = 0;
     }
    
   }
   this.getHealthBarHtml = function(){
    const percent = getPercentage(this.health, this.maxHealth)
    console.log(percent)
}
   this.getCharacterHtml = function(){ 

   const {elementId, name, avatar, health, diceCount, diceArray} = this;

      return `<div class="character-card">
       <h4 class="name">${name}</h4>
       <img class="avatar" src="${avatar}"/>
       <p class="health">health: <b>${health}</b></p>
       <div class="dice-container">
       ${diceArray}
       </div>
   </div>` 

   }
}

export default Character 
