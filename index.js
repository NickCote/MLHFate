/*
*
*/

//variable for how many possible options there are for the people to choose
let amountOfChoices = 0;
let people = [];
let options = [];
let numOfPeople = 5;

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
      let opt = new Option(choiceNameInput.value, false);
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
