// export interface Question {
//     type: 'select-option';
// }

export interface AbstractQuestion {
    id: string;
}

export interface SelectOptionQuestion extends AbstractQuestion {
    type: 'select-option';
    ask: string;
    options: {
        key: string;
        value: any;
    }[];
}

export interface SelectImageQuestion extends AbstractQuestion {
    type: 'select-image-option';
    ask: string;
    images: {
        key: string;
        path: string;
        title: string;
    }[];
}

export type Question = SelectOptionQuestion | SelectImageQuestion;

const questions: Question[] = 
[
    {
        type: 'select-option',
        id: "loved-president",
        ask: 'Wer ist ihr Lieblingspräsident?',
        options: [{
            key: 'obama',
            value: 'Präsident Obama'
        },{
            key: 'bush',
            value: 'Präsident Bush'
        }]
    },

    {
        type: 'select-image-option',
        id: 'loved-pet',
        ask: 'Was ist ihr Lieblingstier?',
        images: [{
            key: 'cat',
            title: 'Katze',
            path: '/angular/assets/images/cat.jpg'
        },{
            key: 'dog',
            title: 'Hund',
            path: '/angular/assets/images/dog.jpg'
        }]
    }

];


export default questions;