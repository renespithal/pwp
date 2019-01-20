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
        options: [{
            key: 'cat',
            title: 'Katze',
            path: '/angular/assets/images/cat.jpg'
        },{
            key: 'dog',
            title: 'Hund',
            path: '/angular/assets/images/dog.jpg'
        }]
    },

    {
        type: 'select-image-option',
        id: 'loved-newspaper',
        ask: 'Sie haben Geld für zwei Zeitungen, für welche beiden entscheiden Sie sich?',
        multiple: true,
        multiple_min: 2,
        multiple_max: 2,
        options: [{
            key: 'postillon',
            title: 'Der Postillon',
            path: '/angular/assets/images/postillon.jpg'
        },{
            key: 'bild',
            title: 'Bild Zeitung',
            path: '/angular/assets/images/bildZeitung.jpg'
        },{
            key: 'zeit',
            title: 'Die Zeit',
            path: '/angular/assets/images/dieZeit.jpg'
        },{
            key: 'bravo',
            title: 'Bravo',
            path: '/angular/assets/images/bravo.jpg'
        }]
    },

    {
        type: 'select-image-option',
        id: 'loved-holiday',
        ask: 'Wo würden Sie am liebsten Ihren Urlaub verbringen',
        options: [{
            key: 'eifelturm',
            title: 'Eifelturm',
            path: '/angular/assets/images/eifelturm.jpg'
        },{
            key: 'pyramide',
            title: 'Pyramide',
            path: '/angular/assets/images/pyramide.jpg'
        },{
            key: 'strand',
            title: 'Strand',
            path: '/angular/assets/images/strand.jpg'
        }]
    },

    {
        type: 'select-image-option',
        id: 'loved-ad',
        ask: 'Welche Werbung halten Sie für gelungen?',
        options: [{
            key: 'fruites',
            title: 'Fruites',
            path: '/angular/assets/images/werbung1.jpg'
        },{
            key: 'partei',
            title: 'Die Partei',
            path: '/angular/assets/images/werbung2.jpg'
        },{
            key: 'ritter',
            title: 'Ritter Sport',
            path: '/angular/assets/images/werbung3.jpg'
        }]
    },

    {
        type: 'select-image-option',
        id: 'loved-brand',
        ask: 'Was bevorzugen Sie zum arbeiten?',
        options: [{
            key: 'apple',
            title: 'Apple',
            path: '/angular/assets/images/apple.png'
        },{
            key: 'windows',
            title: 'Windows',
            path: '/angular/assets/images/windows.png'
        }]
    },

    {
        type: 'select-option',
        id: "loved-genres",
        ask: 'Wählen Sie bis zu drei Lieblingsgenres aus.',
        multiple: true,
        multiple_max: 3,
        multiple_min: null,
        options: [{
            key: 'action',
            value: 'Action'
        },{
            key: 'comedy',
            value: 'Comedy'
        },{
            key: 'drama',
            value: 'Drama'
        },{
            key: 'fantasy',
            value: 'Fantasy'
        },{
            key: 'horror',
            value: 'Horror'
        },{
            key: 'science fiction',
            value: 'Science fiction'
        },{
            key: 'western',
            value: 'Western'
        }]
    },

];


export default questions;