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
        type: 'select-image-option',
        id: 'loved-weekend',
        ask: 'Wie schaut Ihr perfektes Wochenende aus?',
        options: [{
            key: 'wandern',
            title: 'Wandern',
            path: '/angular/assets/images/wandern.jpg'
        },{
            key: 'kneipe',
            title: 'Kneipe',
            path: '/angular/assets/images/kneipe.jpg'
        },{
            key: 'netflix',
            title: 'Netflix',
            path: '/angular/assets/images/netflixUi.jpeg'
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
            key: 'szNews',
            title: 'Sueddeutsche Zeitung',
            path: '/angular/assets/images/szNews.png'
        },{
            key: 'bildNews',
            title: 'Bild Zeitung',
            path: '/angular/assets/images/bildNews.jpg'
        },{
            key: 'bzNews',
            title: 'BZ Zeitung Berlins',
            path: '/angular/assets/images/bzNews.jpg'
        },{
            key: 'phpNews',
            title: 'PHP Magazin',
            path: '/angular/assets/images/phpNews.jpg'
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
        type: 'select-option',
        id: "loved-hobbies",
        ask: 'Welche Freizeitaktivität würden Sie bevorzugen?',
        options: [{
            key: 'wiesn',
            value: 'Wiesn'
        },{
            key: 'bar',
            value: 'Bar'
        },{
            key: 'kino',
            value: 'Kino'
        },{
            key: 'theater',
            value: 'Theater'
        },{
            key: 'sport',
            value: 'Sportveranstaltung'
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


    {
        type: 'select-image-option',
        id: 'loved-image',
        ask: 'Was spricht Sie am meisten an?',
        options: [{
            key: 'kunst',
            title: 'Kunst',
            path: '/angular/assets/images/kunst.jpg'
        },{
            key: 'technik',
            title: 'Technik',
            path: '/angular/assets/images/technik.jpg'
        },{
            key: 'sport',
            title: 'Sport',
            path: '/angular/assets/images/sport.jpg'
        }]
    },

];


export default questions;