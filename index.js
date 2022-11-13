import { characterData } from "./data.js";
import Character from "./character.js";

let monstersArray = ["orc", "demon", "goblin"]
function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}
  function attack(){
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(wizard.currentDiceScore)
    monster.takeDamage(monster.currentDiceScore)
    render()
    if(wizard.dead || monster.dead){
      endGame()
    }
  }
    function endGame(){
      const endMessage = wizard.health === 0 && monster.health === 0 ?
      "No victors - all creatures are dead" :
      wizard.health > 0 ? "The Wizard Wins" :
      "The Orc is Victorious"

      const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
      document.body.innerHTML = 
      `<div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
  </div>` 
    }
 const wizard = new Character(characterData.hero)
 let monster = getNewMonster()
  function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = monster.getCharacterHtml();
  }
  document.getElementById("attack-button").addEventListener("click", attack)
  render()