window.onload(
    setInterval(getSkills, 1500)
);

function menuToggle(){
  let menu = document.getElementsByClassName("menu-drop");
  for(i=0; i < menu.length; i++){
    menu[i].classList.toggle('open');
  }
}

function applySkillBrdrColor(skillArray, colorArray, arrLength) {
  for (let i=0; i < arrLength; i++) {
    skillArray[i].style.border = `.7rem outset ${colorArray[i]}`;
    skillArray[i].style.borderRadius = `10%`;
  };
}

function generateBrdrColor(length) {
  let colorArr = [];
  for (let i=0; i < length; i++ ) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let finalColor = randomColor === "000000" 
      ? Math.floor(Math.random()*16777215).toString(16) 
      : randomColor;
    const hexColor = "#" + finalColor;
    colorArr[i] = hexColor;
  };
  return colorArr;
}

function getSkills() {
  const skills = document.getElementById("about-skills").children;
  let skillArray = Array.from(skills);
  const arrLength = skillArray.length;
  const colorArray = generateBrdrColor(arrLength);
  const colorSkills = applySkillBrdrColor(skillArray, colorArray, arrLength);
  return colorSkills;
}