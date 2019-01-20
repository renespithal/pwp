import { AuthService } from './../../../../common/services/auth.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from './../../../../common/common.module';
//import { NgModule } from '@angular/core';
import questions, { Question } from './questions';

export function questionMinMaxAnswered(min: number = null, max:number = null) {

  return (control: FormGroup) => {

    let selected: number = 0;
    for (let c of Object.values(control.controls)) {
      if (c.value === true) {
        selected++;
      }
    }

    console.log(selected, min, max);
    if (max != null && selected > max) {
      return {need_less: true};
    }
    if (min != null && selected < min) {
      return {need_more: true};
    }

    return {};
  }

}


@Component({
    selector: 'profile-questionary',
    templateUrl: './questionary.component.html',
    styleUrls: ['./questionary.component.scss']
})
export class ProfileQuestionaryComponent implements OnInit {

  @Output() onQuestionSave = new EventEmitter();

  /** */
  currentQuestionIndex: number = 0;

  /**  */
  questions: Question[];

  /**  */
  questionsFormGroup: FormGroup;

  constructor(protected AuthService: AuthService,
    protected fb: FormBuilder) {

    this.questions = questions;
    this.resetForm();
  }
  
  /** */
  ngOnInit() {}

  /**
   * 
   */
  nextQuestion() {
    if (!(typeof this.questions[this.currentQuestionIndex+1] == "undefined")) {
      this.currentQuestionIndex++;
    }
  }

  /**
   * 
   */
  prevQuestion() {
    if (this.currentQuestionIndex > 0) this.currentQuestionIndex--;
  }

  /**
   * 
   */
  saveQuestions() {
    this.onQuestionSave.emit(this.questionsFormGroup.value);
  }

  /**
   * 
   */
  resetForm() {

    this.questionsFormGroup = this.fb.group({
      questions: this.fb.array(this.questions.map(q => {

        if (typeof q.multiple != 'undefined'
          && q.multiple === true) {

            const minAnswered = 'multiple_min' in q
              && q.multiple_min > 1 ? q.multiple_min : 1; // Standart = 1
            const maxAnswered = 'multiple_max' in q
            && q.multiple_max > 0 ? q.multiple_max : null

            let values = {};
            (q.options as any[]).forEach(o => {
              values[o.key] = this.fb.control(false);
            })

            let answers = this.getAnsweredValue(q);

            if (answers) {
              answers.split('$')
              .forEach(v => {
                Object.assign(values, {[v]: this.fb.control(true)});
              });
            }

            return this.fb.group({
              key: q.id,
              values: this.fb.group(
                values, 
                {validator: questionMinMaxAnswered(minAnswered, maxAnswered)}
              )
            })

        } else {
          return this.fb.group({
            key: q.id,
            value: [this.getAnsweredValue(q), Validators.required]
          })
        }

      }))
    })

  }

  /**
   * 
   * @param questionKey
   */
  getAnsweredValue(question: Question): string {

    const answers = this.AuthService.currentUser().answers;

    let answer = answers.filter(a => {
      return a.key == question.id;
    });

    return answer.length == 1 ? answer[0].value : null;

  }
  
  /**
   * 
   */
  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  };



}
