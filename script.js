// $('body').css("background-color", "yellow");

// when button is clicked
//IIFE = immediately invoked f/n expression 
$("#btnGetAnimal").on("click", function(){
  //get the user name
  let bakerName = $("#bakerName").val(); 
  //var variableName =  ... let (const) 
  
 $("#greetingArea").text("Hi there, " + bakerName + "!");  
  //give them a personalized greeting
  
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];
  
  $("#greetingArea").text("Your spirit animal is: " + randomAnimal)
  //next, also tell spirit animal 
} )

let spiritAnimals = ["🦄","🦌","🐎","🦮","🐧","🐇","🐳","🐩","file not found"]