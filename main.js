function menuToggle(){
    let menu = document.getElementsByClassName("menu-drop");
    for(i=0; i < menu.length; i++){
        menu[i].classList.toggle('open');
    }
}