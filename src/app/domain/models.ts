export enum Category {
    'BOOK' = 'BOOK',
    'VERSE' = 'VERSE', //consistent that the bible ver will be consistent prior to letters appearing.
    'CHARACTER' = 'CHARACTER',
    'STORY' = 'STORY',
    'DID_YOU_KNOW' = 'DID_YOU_KNOW',
    'PUZZLE' = 'PUZZLE'

}

export enum Language {
    'NL' = 'NEDERLANDS',
    'ES' = 'SPAANS',
    'EN' = 'ENGLISH'
}

export enum GameMode {
    'BAG_POINT_MODE' = 'BAG_POINT_MODE', //get points, timed (10), letters appear completly randomly, the host check answer (pause, stop, continue, start), save/ accumulate points per category , 
    'BOWLING_MODE' = 'BOWLING_MODE',
    'COUNT_DOWN_MODE' = 'COUNT_DOWN_MODE', //when a letter a appears points are deducted and you get the points only if you guess it.(full puzzle).
    'ORDER_WORDS_MODE' = 'ORDER_WORDS_MODE'
}

export interface ExtraReference {
    url : string;
    content : string;
}

export interface Puzzle {
    topic : Category;
    score : number;
    language : Language;
    statement: string;
    answer: string;
    reference: ExtraReference;
    hint: string;
}

export interface Team {
    name: string;
    avatar: string;
    score: number;
}

export interface Game {
    puzzles : Array<Puzzle>;
    teams : Array<Team>;
    winner : Team;
    mode : GameMode;
}