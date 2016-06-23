function generateStory(){
  var story = "Welcome to ScriptEd! Our mascot is the PLURAL_NOUN.  We love to VERB! ";
  var story2 = "Welcome! The village was full of PLURAL_NOUN. On the weekend they VERB for fun.";
  var story3 = "Welcome! Here at PLURAL_NOUN we enjoy VERB to best help you";
  var num = Math.floor((Math.random()* 3) + 1);
  if(num === 1)
    return story;
  else if(num === 2)
    return story2;
  else
    return story3;
  console.log(num);
}
function generateMadlib() {
  
  // This is the starting story
  var story = generateStory();
  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
  
}