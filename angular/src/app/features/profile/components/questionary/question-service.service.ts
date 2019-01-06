import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  radio: boolean = true;
  type2: boolean = false;
  type3: boolean = false;
  questions: Question[];
  currentQuestion: Question;

  constructor() {
    // this.questions.push(new Question('radio'));
    // this.questions.push(new Question('type2'));
    // this.questions.push(new Question('type3'));
  }

  nextQuestion(){

  }

}
