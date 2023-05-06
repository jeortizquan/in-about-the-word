export enum Category {
    'BOOK' = 'BOOK',
    'VERSE' = 'VERSE',
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
    'BAG_POINT_MODE' = 'BAG_POINT_MODE',
    'BOWLING_MODE' = 'BOWLING_MODE',
    'COUNT_DOWN_MODE' = 'COUNT_DOWN_MODE',
    'ORDER_WORDS_MODE' = 'ORDER_WORDS_MODE'
}

export interface ExtraReference {
    url : string;
    content : string;
}

export interface Question {
    topic : Category;
    score : number;
    language : Language;
    statement: string;
    answer: string;
    reference: ExtraReference;
    hint: string;
}

export interface Player {
    name: string;
    avatar: string;
    score: number;
}

export interface Game {
    questions : Array<Question>;
    players : Array<Player>;
    winner : Player;
    mode : GameMode;
}