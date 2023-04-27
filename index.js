let result_area = document.querySelector("#resultarea");

let button_shield = document.querySelector("#button");
let button_isOff = true;
button_shield.addEventListener("click", function () {
  if (button_isOff) {
    button_shield.style.backgroundColor = "#daa520";
    button_shield.innerHTML = "Escudo Ativado";
    button_isOff = false;
  } else {
    button_shield.style.backgroundColor = "#a9a9a9";
    button_shield.innerHTML = "Ativar Escudo";
    button_isOff = true;
  }
});

let startbattle = document.querySelector(".startbattle");

startbattle.addEventListener("click", function () {
  let attack = parseFloat(document.querySelector("#attack").value);
  let health = parseFloat(document.querySelector("#health").value);
  let defense = parseFloat(document.querySelector("#defense").value);
  let person1 = document.querySelector(".name_person1").value;
  let person2 = document.querySelector(".name_person2").value;
  let damage = attack - defense;
  let mana = health - damage;
  let defenseWith_shield = damage / 2;
  let manaWith_shield = health - defenseWith_shield;

  if (isNaN(attack) || isNaN(defense) || isNaN(health)) {
    result_area.innerHTML = "Invalid Input";
  } else if (attack <= defense) {
    result_area.innerHTML = `-- ${person1} é cansado! Não fez nem cócegas haha! --`;
  } else if (button_isOff) {
    result_area.innerHTML = `-- ${person1} não sabe nem brincar! Deu ${damage} de dano!
    
`;
    if (mana <= 0) {
      result_area.innerHTML += `-- ${person2} ficou com ${mana} de vida e foi de arrasta pra cima... --`;
    } else {
      result_area.innerHTML += `-- ${person2} ficou com ${mana} de vida --`;
    } //Condicional para mensagem sobre a mana do person2
  } else if (manaWith_shield <= 20) {
    result_area.innerHTML = `-- ${person2} já pode aposentar com seu escudinho! ${person1} deu ${defenseWith_shield} de dano e ${person2} ficou com ${manaWith_shield} de vida. --`;
  } else {
    result_area.innerHTML = `-- Escudo tá potente! ${person1} deu ${defenseWith_shield} de dano e ${person2} ficou com ${manaWith_shield} de vida. Que fase ein ${person1}! --`;
  }
});
