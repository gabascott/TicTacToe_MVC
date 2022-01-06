class Info{
    constructor(){
        this.kovetkezoJatekos = $(".kovetkezoJatekos");
        this.jatekvege = $(".jatekvege");
    }

    setKovetkezoJatekos(ertek){
        this.kovetkezoJatekos.html(ertek);
    }
    setJatekVege(ertek){
        this.jatekvege.html(ertek);
    }
}