import { Team, Puzzle, Language, Category, Game, GameMode } from './models';


export let teamData : Array<Team> = [
    { "name": "Team1", "score": 0 , "avatar" : "avatar1" },
    { "name": "Team2", "score": 0 , "avatar" : "avatar2" },
    { "name": "Team3", "score": 0 , "avatar" : "avatar3" },
    { "name": "Team4", "score": 0 , "avatar" : "avatar4" },
]

export let puzzleData : Array<Puzzle> =[
    {"language": Language.NL, "score": 5, "topic": Category.BOOK, "reference": {"content": "De Thora", "url": "https://nl.wikipedia.org/wiki/Thora"} , 
       "statement": "Eerste vijf boeken van het Bijbel", "answer": "Genesis\nExodus\nLeviticus\nNumeri\nDeuteronomium", "hint": "Geschreven door Mozes." },
    {"language": Language.NL, "score": 12, "topic": Category.VERSE, "reference": {"content": "De Brief van Paulus aan de Filippenzen", "url": "https://nl.wikipedia.org/wiki/Brief_van_Paulus_aan_de_Filippenzen"} , 
       "statement": "Filippenzen 4:13 (BB)", "answer": "Ik kan alle dingen aan,\ndankzij Christus die mij kracht geeft.", "hint": "Geschreven door Paulus." },
    {"language": Language.NL, "score": 8, "topic": Category.STORY, "reference": {"content": "Johannes 10", "url": "https://nl.wikipedia.org/wiki/Gelijkenis_van_de_Goede_Herder"} , 
       "statement": "JOHANNES 9-10 (BB)", "answer": "Jezus is de goede herder", "hint": `Dit is een gelijkenis die Jezus gebruikte om aan te kondigen dat Hij\n
       door God de Vader naar de wereld was gestuurd om Zijn kinderen te\n
       redden. Als een Goede Herder liet Jezus ons niet in de steek of rende\n
       niet weg toen Hij de tegenstander zag komen om te stelen, te\n
       doden en te vernietigen. In plaats daarvan legde Jezus vrijwillig Zijn\n
       leven af zodat de onze gered kon worden. Allen die geloven hebben\n
       het eeuwige leven! Als Zijn kinderen kunnen we dit als herinnering\n
       beschouwen dat alleen al daarvoor GOD GOED IS..` },    
    {"language": Language.NL, "score": 12, "topic": Category.CHARACTER, "reference": {"content": "Personages", "url": "https://nl.wikipedia.org/wiki/Brief_van_Paulus_aan_de_Filippenzen"} , 
       "statement": `de gevangene onder moordenaars en
       rovers, die vanwege de keuze van de menigte werd
       vrijgelaten in plaats van Jezus.

       (Jozef Justus) - een van de
        genomineerden die de twaalfde discipel zou worden,
        na de dood van Judas Iskariot. Na het vragen van
        God’s wil, werd hij niet gekozen.
        
        (Joses) *welke betekent aanmoediger*
        - hij was de persoon die Saulus naar de apostelen
        bracht, en die Saulus (Paulus) begeleidde en
        vergezelde in het begin van Paulus' bediening.

        (Judas) - een van de profeten, een leider
        onder de gelovigen die gevraagd werd om met Paulus
        en Barnabas op reis te gaan naar Antiochië.`, 
       "answer": "Barabbas, Barsabbas, Barsabbas, en Barnabas", "hint": "Matteüs 27:17 (BB) Handelingen 1:23 (BB) Handelingen 4, 9-15 (BB) Handelingen 15: 22-32 (BB)" },   
]

export let gameData : Game = {
    "puzzles" : puzzleData,
    "mode" : GameMode.BAG_POINT_MODE, 
    "teams" : teamData, 
    "winner": {} as Team
}
