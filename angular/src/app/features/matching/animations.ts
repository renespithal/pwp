import {trigger, animate, style, transition, state} from '@angular/animations';


export const slide = [
  trigger('slide', [

  state('right', style({ transform: 'translateX(+300%)', opacity:'0'})),
  state('left', style({ transform: 'translateX(-300%)', opacity:'0'})),
  state('mid', style({ opacity:'1', transform: 'none'})),
  state('hidden', style({opacity:'0', transform: 'none'})),

  transition('hidden => mid', [
    animate('250ms')
  ]),

  transition('mid => left', [
    animate('350ms')
  ]),

  transition('mid => right', [
    animate('350ms')
  ]),

  transition('* => hidden', [
    animate('400ms')
  ])

])];
