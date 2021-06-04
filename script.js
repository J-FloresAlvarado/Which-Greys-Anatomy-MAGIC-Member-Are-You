 $(".restart").click(function() {
   $(".Quiz").hide();
   $(".result").hide();
   $(".reload").show(); 
   $(".attempts").hide();   
    $(".attempts").text(" ");
   $(".result").text("");
    $(".restart").hide();    
 });             
                  
   $(".reload").click(function() {
   $(".Quiz").show();
   $(".result").show();  
   $(".attempts").show();    
 });        

let attemptCounter=0;
$(".submit").click(function() {
    let input= $('.name').val();
    let intro= $('.Seasonnumber').val();
    let answer1= $(".siblingQ").val(); 
    let answer2 = $(".schoolQ").val();
    let answer3 = $(".sportsQ").val();
    let answer4= $(".bakingQ").val();
    let answer5 = $(".personQ").val();
    let answers=  "➮"+ "Here are your quiz results:"+ input + " , " +intro+ " , " +answer1+ " , " +answer2+ " , " +answer3 + ", " + answer4 + " , " + answer5 ;
     attemptCounter= attemptCounter+1;
    console.log(attemptCounter);
    $(".attempts").text("You have taken this quiz"+ " "+ attemptCounter + " "+ "times");
    $(".results").append("<br>"+answers);
    console.log(answers);  
    alert("Thank you for your input your answer will appear in a moment :))"); 
   
    if ((answer1==="No"&& answer2==="Yes") && (answer3==="No" && answer4=== "No"|| answer5=== "Yes")){( 
     $(".history").text("Congratulations, based on your quiz inputs you are definitely Meredith Grey AKA Big Grey 👩🏼‍⚕️"));}
    
    if ((answer1==="No"&& answer2==="No") && (answer3==="Yes" && answer4=== "No"|| answer5=== "Yes")){ 
     $(".history").text("Congratulations, based on your quiz inputs you are definitely Alex Karev AKA Evil Spawn 🥊🦹🏻");}
    
      if ((answer1==="No"&& answer2==="Yes") && (answer3==="No" && answer4=== "Yes"|| answer5=== "Yes")){ 
     $(".history").text("Congratulations, based on your quiz inputs you are definitely George O'Malley AKA Bambi 🦌");}
      if ((answer1==="Yes"&& answer2==="Yes") && (answer3==="Yes" && answer4=== "Yes"|| answer5=== "Yes")){ 
     $(".history").text("Congratulations, based on your quiz inputs you are definitely Isobel (Izzie) Stevens AKA Dr. Model 👱🏼‍♀️👠");}
          if ((answer1==="No"&& answer2==="Yes") && (answer3==="No" && answer4=== "No"|| answer5=== "Yes")){ 
     $(".history").text("Congratulations, based on your quiz inputs you are definitely Cristina Yang AKA Cardio God ❤️‍🔥 ");}
    
});


 

 

