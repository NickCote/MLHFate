let orderedPeople = []; //final variable of ordered people
let people; //non ordered people
let heightestValue;

let numOfPeople = 5;

orderPeople();

function checkDuplicate(currentRoll, takenRolls){
  for(int i = 0; i < takenRolls.length; i++){
    if(takenRolls[i] == currentRoll){
      return true; //Duplicate
    }
  }

  return false;
}

function setAllRoles(){
  let takenRolls = [];
  var roll;

  for(var i = 0; i < people.length; i++){
    roll = getRoll();

    while(checkDuplicate(roll, takenRolls) == true){
      roll = getRoll();
    }

    people[i].setRoll(roll);
    takenRolls[i] = roll;
  }
}

function getRoll(){
  return Math.floor(Math.random() * 20);
}

function orderPeople(){
  let tempHighestValue; //holder for the highest value

  for(let i = 0; i < numOfPeople; i++){ //Picks are largest, then second largest, then etc
    tempHighestValue = 0; //highest value in the remaining set

    for(let j = 0; j < numOfpeople; j++){ //loops through remaining set
      if(people[heightestValue].roll > tempHighestValue){ //finds largest value in remaining set
        tempHighestValue = people[j].roll;
        heightestValue = j; // heightValue = person with the highest value in the remaining set
      }
    }

    orderedPeople[i] = people[heightestValue].roll; //sets highest person in the remaining set and orders them
    people[heightestValue].roll = -1; //removes highest person from the remaining set
  }
}

function assignOption(){
  for(var i = 0; i < people.length; i++){
    for(var j = 0; j < options.length; j++){
      if(option[j].available == true){
        orderedPeople[i].result = option[j].name;
        option[j].available = false;
        break;
      }
    }
  }
}
