import { characterData } from "./data.js";
import Character from "./character.js";


  function attack(){
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(wizard.currentDiceScore)
    orc.takeDamage(orc.currentDiceScore)
    render()
  }
 const wizard = new Character(characterData.hero)
 const orc= new Character(characterData.monster)

  function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = orc.getCharacterHtml();
  }
  document.getElementById("attack-button").addEventListener("click", attack)
  render()