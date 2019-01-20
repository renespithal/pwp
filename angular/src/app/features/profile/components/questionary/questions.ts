// export interface Question {
//     type: 'select-option';
// }

export interface AbstractQuestion {
    id: string;
}

export interface AbstractMultipleQuestions extends AbstractQuestion {
    multiple?: boolean;
    multiple_min?: number;
    multiple_max?: number;
}

export interface SelectOptionQuestion extends AbstractMultipleQuestions {
    type: 'select-option';
    ask: string;
    options: {
        key: string;
        value: any;
    }[];
}

export interface SelectImageQuestion extends AbstractMultipleQuestions {
    type: 'select-image-option';
    ask: string;
    options: {
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
        // multiple: true,
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
        // multiple: true,
        ask: 'Was ist ihr Lieblingstier?',
        options: [{
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