class Person{

  constructor(name)
  {
    this.name = name;
    this.preferedChoices = [];
    this.roll;
    this.result;
  }
     // this.roll;

    //person ranks their choices from highest wanted to least wanted
  addPreferedChoice(choice)
  {
    //adds the prefered choice to the array
    this.preferedChoices.push(choice);
  }
  setResult(result)
  {
    this.result = result;
  }

  setRoll(roll)
  {
    this.actualRoll = this.roll;
    this.roll = roll;
  }
  getRoll()
  {
    return this.roll;
  }

};
