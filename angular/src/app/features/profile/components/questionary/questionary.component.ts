import { AuthService } from './../../../../common/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from './../../../../common/common.module';
//import { NgModule } from '@angular/core';
import questions, { Question } from './questions';

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

            let values = {};
            (q.options as any[]).forEach(o => {
              values[o.key] = this.fb.control(false);
            })

            this.getAnsweredValue(q)
              .split('$')
              .forEach(v => {
                Object.assign(values, {[v]: this.fb.control(true)});
              });

            return this.fb.group({
              key: q.id,
              values: this.fb.group(values)// TODO Validators
            })

        } else {
          return this.fb.group({
            key: q.id,
            value: [this.getAnsweredValue(q), Validators.required]
          })
        }

      }))
    })

    console.log(this.questionsFormGroup.value);

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
