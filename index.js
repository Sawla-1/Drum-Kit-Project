
/*
// Simple Click detech ///////////////////////////////////////////////////

document.querySelector("button").addEventListener("click",function jar(){
    alert("I got clicked!");

    // what to do when clicked detected.


});
*/
/*
// Add for loop ////////////////////////////////////////////////////////////////
var drumLength = document.querySelectorAll(".drum").length;
for(var i=0 ; i<drumLength ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function jar(){
    var sound = new Audio('sounds/tom-1.mp3');
    sound.play();


});

}
*/
/*
// Add for loop , Add Audio ////////////////////////////////////////////////////////////////
var drumLength = document.querySelectorAll(".drum").length;
for(var i=0 ; i<drumLength ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function jar(){
    var sound = new Audio('sounds/tom-1.mp3');
    sound.play();


});

}
*/

/// Add for loop , Add Audio for all drum///////////////////////////////////////////////////

var drumLength = document.querySelectorAll(".drum").length;
for(var i=0 ; i<drumLength ; i++){
        document.querySelectorAll(".drum")[0].addEventListener("click",function jar(){
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
        });
        document.querySelectorAll(".drum")[1].addEventListener("click",function jar(){

            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
        });
        document.querySelectorAll(".drum")[2].addEventListener("click",function jar(){

            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
        });
        document.querySelectorAll(".drum")[3].addEventListener("click",function jar(){

            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
        });
        document.querySelectorAll(".drum")[4].addEventListener("click",function jar(){

            var sound = new Audio("sounds/snare.mp3");
            sound.play();
        });
        document.querySelectorAll(".drum")[5].addEventListener("click",function jar(){

            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
        });
        document.querySelectorAll(".drum")[6].addEventListener("click",function jar(){

            var sound = new Audio("sounds/crash.mp3");
            sound.play();
        });
        

}

/*
/// Add for loop , Add Audio, Change text color to white ///////////////////////////////////////////////////
var drumLength = document.querySelectorAll(".drum").length;
for(var i=0 ; i<drumLength ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function jar(){
    console.log(this.style.color="white");
    var sound = new Audio('sounds/crash.mp3');
    sound.play();
});

}

// var sound = new Audio('sounds/crash.mp3');
// sound.play();

*/