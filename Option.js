class Option
{
  constructor(type, taken)
  {
    this.type = type;
    this.available = taken;
  }

  setTaken(notTaken)
  {
    this.available = notTaken;
  }
}
