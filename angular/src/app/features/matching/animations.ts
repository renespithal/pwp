import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


/*
this should fade in/out the images as they are being replaced by a new one
by toggle the state between 'in' and 'out' with the toggleState()

export const fade = [
  trigger('fade', [
    state('in', style({
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('out', style({
        opacity: 0.5,
        backgroundColor: 'orange'
      })),
    transition('in => out', [
      animate(500)
    ]),
    transition('out => in', [
        animate(200)
  ])
])];*/

export const fade = [
    trigger('fade', [
        transition(':enter', [
          style({transform: 'translateY(100%)'}),
          animate('0.7s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),

        /* 
        should move the image sideways but doesnt work right now because the images doesnt leave the view after match/nomatch 
        since it gets replaced by a new one instead
        and moving the whole div sideways leads to the next images being outside of the view 
        */
        transition(':leave', [
          style({transform: 'translateX(0%)'}),
          animate('0.5s ease-in-out', style({transform: 'translateX(-300%)'}))
        ])
      ])];



