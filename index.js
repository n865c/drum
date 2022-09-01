for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
 
});
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
});
function makeSound(key)
{
  switch(key)
  {
   case "w":
     var tem1=new Audio("sounds/tom-1.mp3");
     tem1.play();
     break;
      case"a":
       var tem2 = new Audio("sounds/tom-2.mp3");
       tem2.play();
       break;
       case "s":
         var tem3=new Audio("sounds/tom-3.mp3");
         tem3.play();
         break;
         case "d":
           var tem4=new Audio("sounds/tom-4.mp3");
           tem4.play();
          break;
          case "j":
           var tem5=new Audio("sounds/snare.mp3");
           tem5.play();
           break;
           case "k":
           var tem6=new Audio("sounds/kick-bass.mp3");
           tem6.play();
           break;
           case "l":
           var tem7=new Audio("sounds/crash.mp3");
           tem7.play();
           break;
           default:
             console.log(buttonInnerHTML);
 
      
  }
}
