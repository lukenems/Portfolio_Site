function menuToggle(){
    console.log(this.innerHTML)
    let menu = document.getElementsByClassName("menu-drop");
    for(i=0; i < menu.length; i++){
        menu[i].classList.toggle('open');
    }
}