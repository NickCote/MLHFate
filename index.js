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
  console.log(orderedPeople);
}

//create the forms for persons input
function inputPerson()
{
  //create form input to add person
  let personInput = document.createElement("FORM");

  //get input into form and add form to page
  let nameInput = document.createElement("INPUT");
  personInput.appendChild(nameInput);
  nameInput.setAttribute("placeholder", "Enter your name");

  for(let i = 0; i < options.length; i++)
  {
    let choicePreference = document.createElement("INPUT");
    personInput.appendChild(choicePreference);
    choicePreference.setAttribute("placeholder", "Enter Choice #" + (i+1));
  }

  //section on the page where display the forms
  let location = document.getElementById("personForms");
  location.appendChild(personInput);

  let confirm = document.createElement("INPUT");
  confirm.setAttribute("type", "button");
  confirm.classList.add("btn");
  confirm.classList.add("btn-success");
  confirm.onclick = function()
  {
    createPerson(personInput);
  };

  personInput.appendChild(confirm);

  console.log(personInput);

  return false;
}

let iOption = null;
function AddChoice()
{
  amountOfChoices++;
  //create form to add a new choice
  let choiceInput = document.createElement("FORM");

  //get the name of the choice as input and add form to page
  let choiceNameInput = document.createElement("INPUT");
  choiceInput.appendChild(choiceNameInput);
  choiceNameInput.setAttribute("placeholder", "Choice #" + amountOfChoices);
  choiceNameInput.onblur = function()
  {
    if(iOption != null)
    {
      options[iOption].type = choiceNameInput.value;
      iOption = null;
    }
    else {
      let opt = new Option(choiceNameInput.value, true);
      options.push(opt);
      console.log(options);
    }
    console.log(iOption);
  };
  choiceNameInput.onclick = function()
  {
    for(let i = 0; i < options.length; i++)
    {
      if(options[i].type == choiceNameInput.value)
      {
        iOption = i;
      }
    }

  };

  //section on the page where display the forms
  let location = document.getElementById("choiceForms");
  location.appendChild(choiceInput);

  console.log(choiceNameInput.value);

  return;
}

function createPerson(form)
{
  console.log(options);
     let currPerson = new Person();
     currPerson.name = form.children[0].value;
     form.children[0].readOnly = true;
     console.log(currPerson);
     for(let i = 1; i < form.children.length; i++)
     {
      form.children[i].readOnly = true;
       for(let j = 0; j < options.length; j++)
       {
         // console.log(options[j]);
         if(options[j].type == form.children[i].value)
         {
          currPerson.addPreferedChoice(options[j]);
         }
       }

     }
     people.push(currPerson);
     return;
}

function outputResults()
{
  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for(let i = 0; i < orderedPeople.length; i++)
  {
    let div = document.createElement("DIV");
    div.innerText = orderedPeople[i].name + ": " + orderedPeople[i].result + " Roll: " + orderedPeople[i].actualRoll;
    resultsDiv.appendChild(div);
  }
}

function go()
{
  setAllRoles();
  orderPeople();
  assignOption();
  outputResults();
}
