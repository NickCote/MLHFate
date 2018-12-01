
let orderedPeople = []; //final variable of ordered people
let heightestValue;
//variable for how many possible options there are for the people to choose
let amountOfChoices = 0;
let people = [];
let options = [];
//orderPeople();

function setAllRoles(){
  for(var i = 0; i < people.length; i++){
    people[i].setRoll(getRoll());
  }
}

function getRoll(){
  return Math.floor(Math.random() * 20);
}

function orderPeople(){
  let tempHighestValue; //holder for the highest value

  for(let i = 0; i < people.length; i++){ //Picks are largest, then second largest, then etc
    tempHighestValue = 0; //highest value in the remaining set

    for(let j = 0; j < people.length; j++){ //loops through remaining set
      if(people[j].getRoll() > tempHighestValue){ //finds largest value in remaining set
        tempHighestValue = people[j].getRoll();
        heightestValue = j; // heightValue = person with the highest value in the remaining set
      }
    }

    orderedPeople[i] = people[heightestValue]; //sets highest person in the remaining set and orders them
    people[heightestValue].setRoll(-1); //removes highest person from the remaining set
  }
}

function assignOption(){
  for(var i = 0; i < orderedPeople.length; i++){
    for(var j = 0; j < orderedPeople[i].preferedChoices.length; j++){
      if(orderedPeople[i].preferedChoices[j].available == true){
        orderedPeople[i].result = orderedPeople[i].preferedChoices[j].type;
        orderedPeople[i].preferedChoices[j].available = false;
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

  for(let i = 0; i < 5; i++)
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
    //iOption = null;

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

function go()
{
  setAllRoles();
  orderPeople();
  assignOption();
}
