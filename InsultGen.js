function shakeInsults(){
    
    var shakespearInsults = [
    "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality"
    ,
    "Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!"
    ,
    "Away, you three-inch fool!"
    ,
    "Thou elvish-mark'd, abortive, rooting hog!"
    ,
    "Thou art a boil, a plague sore"
    ,
    "Would thou wert clean enough to spit upon"
    ,
    "Would thou wouldst burst!"
    ,
    "The rankest compound of villainous smell that ever offended nostril"
    ,
    "Poisonous bunch-backed toad!"
    ,
    "Away, you three-inch fool!"
    ,
    "A weasel hath not such a deal of spleen as you are toss’d with"
                            ];
    
    var pickTwo = shakespearInsults[Math.floor(shakespearInsults.length * Math.random())];
    
    var shakeDiv = document.getElementById('Insult');
    shakeDiv.innerText = pickTwo;
    
}

document.getElementById('shakebtn').onclick=function(){
    shakeInsults();
}
