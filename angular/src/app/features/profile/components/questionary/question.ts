export class Question {

  // this class provides an template to store different kind of questions

  constructor(private type: string) {
  }

  getType(): string{
    return this.type;
  }


  }
