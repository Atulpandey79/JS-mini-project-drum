
//detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      var buttonInnerHTML = this.innerHTML;
         makeSound(buttonInnerHTML);
    });
    
}

//detecting key press

document.addEventListener("keypress",function(event){

    makeSound(event.key);
});

function makeSound(key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/main/tom-1.mp3");
            tom1.play();
            break;
         case "a":
             var tom2 = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/main/tom-2.mp3");
             tom2.play();
            break;
         case "s":
             var tom3 = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/main/tom-3.mp3");
             tom3.play();
          break;           
         case "d":
             var tom4 = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/main/tom-4.mp3");
             tom4.play();
          break;           
         case "j":
             var snare = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/main/snare.mp3");
             snare.play();
          break;           
         case "k":
             var crash = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/485fae00f3de0fa7652377cc3ec8c9242ac4ef0e/crash.mp3");
             crash.play();
          break;           
         case "l":
             var kick = new Audio("https://github.com/Atulpandey79/JS-mini-project-drum/raw/main/kick-bass.mp3");
             kick.play();
          break;           
             default: console.log(buttonInnerHTML);
            
    }

}

