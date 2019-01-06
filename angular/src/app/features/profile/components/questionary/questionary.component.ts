import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionService } from './question-service.service';
//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from './../../../../common/common.module';
//import { NgModule } from '@angular/core';

@Component({
    selector: 'profile-questionary',
    templateUrl: './questionary.component.html',
    styleUrls: ['./questionary.component.scss']
})
export class ProfileQuestionaryComponent implements OnInit {

  numberOfQuestions: number = 3;
  currentQuestion: number = 1;

  radio: boolean = true;
  picture: boolean = false;
  slider: boolean = false;

  pictures: string[] = [];

  sliderRange: number = 10;
  sliderInterval: number = 1;



  constructor(private questionService: QuestionService) {

  }

  ngOnInit(){
    this.pictures.push('/assets/images/blue.png');
    this.pictures.push('/assets/images/red.png');
    this.pictures.push('/assets/images/yellow.png');
  }

  nextQuestion(){
    if(this.radio == true){
      this.picture = true;
      this.slider = false;
      this.radio = false;
    }
    else if(this.picture = true){
      this.radio = false;
      this.picture = false;
      this.slider = true;
    }
    else if(this.slider = true){
    }
    if(this.currentQuestion<3){
      this.currentQuestion += 1;
    }
  }

}
