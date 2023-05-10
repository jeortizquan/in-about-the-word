import { Player, Question, Language, Category, Game, GameMode } from '../models/models';


export let playerData : Array<Player> = [
    { "name": "P1", "score": 0 , "avatar" : "avatar1" },
    { "name": "P2", "score": 0 , "avatar" : "avatar2" },
    { "name": "P3", "score": 0 , "avatar" : "avatar3" },
    { "name": "P4", "score": 0 , "avatar" : "avatar4" },
]

export let questionData : Array<Question> =[
    {"language": Language.NL, "score": 5, "topic": Category.BOOK, "reference": {"content": "De Thora", "url": "https://nl.wikipedia.org/wiki/Thora"} , 
       "statement": "Eerste vijf boeken van het Bijbel", "answer": "Genesis\nExodus\nLeviticus\nNumeri\nDeuteronomium", "hint": "Geschreven door Mozes." },
    {"language": Language.NL, "score": 12, "topic": Category.VERSE, "reference": {"content": "De Brief van Paulus aan de Filippenzen", "url": "https://nl.wikipedia.org/wiki/Brief_van_Paulus_aan_de_Filippenzen"} , 
       "statement": "Filippenzen 4:13 (BB)", "answer": "Ik kan alle dingen aan,\ndankzij Christus die mij kracht geeft.", "hint": "Geschreven door Paulus." },
    
]

export let gameData : Game = {
    "questions" : questionData,
    "mode" : GameMode.BAG_POINT_MODE, 
    "players" : playerData, "winner": {} as Player
}
