class game{
    greniers = [ , , , , , , , , , , , ];
    current_player = 0;

    constructor(){
        for (i in Range(0,11)){
            if(i < 6) this.greniers[i] = new grenier(i,0);
            else this.greniers[i] = new grenier(i,1);
        }
    }

    play(grenierId) {
        var grenierFinal = 0;
        for (i in Range(1,greniers[grenierId].nb_graines)){
            greniers[grenierId+i].nb_graines++;
            grenierFinal = grenierId+i;
        }
    }
}