function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;
  }
  
  
  console.log(saturdayFun());


  //lab2//
  const mondayWork = function(activity = "go to the office") {

    return `This Monday, I will ${activity}.`;
  };
  

  console.log(mondayWork());
  
  //lab3//

function saturdayFun(activity = "roller-skate") {

    return `This Saturday, I want to ${activity}!`;
  }
  
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction());