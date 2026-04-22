class game{
    greniers = [ , , , , , , , , , , , ];
    current_player = 0;
    scores = [0,0];

    constructor(){
        for (i in Range(0,11)){
            if(i < 6) this.greniers[i] = new grenier(i,0);
            else this.greniers[i] = new grenier(i,1);
        }
    }

    play(grenierId) {
        var grenierFinal = 0;
        for (i in Range(1,greniers[grenierId].nb_graines)){
            greniers[(grenierId+i)%12].nb_graines++;
            grenierFinal = (grenierId+i)%12;
        }
        var currentGrenier = this.greniers[grenierFinal];
        while (0 < currentGrenier.nb_graines < 3 && currentGrenier.player_id != this.current_player){
            this.scores[this.current_player] += currentGrenier.nb_graines;
            currentGrenier.nb_graines = 0;
            currentGrenier = this.greniers[(currentGrenier.id-1)%12];
        }
        this.current_player = 1-this.current_player;
        this.greniers[grenierId].nb_graines = 0;
    }
}