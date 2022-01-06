class tictactoeController{
    constructor(){
        const tomb = [];
        new jatekTer(tomb);
        this.info = new Info();
        const kiertekel = new Kiertekel(tomb);
        this.lepes = 0;

        $(window).on("kivalaszt", (event)=>{
            //console.log(event.detail);
            let aktElem = event.detail;
            if (this.lepes % 2 == 0) {
                aktElem.setElem("X");
                this.info.setKovetkezoJatekos("O következik");
            }else {
                aktElem.setElem("O");
                this.info.setKovetkezoJatekos("X következik");
            }
            this.lepes++;
            console.log(kiertekel.getEllenorzes());
            if (kiertekel.getEllenorzes() === "X") {
                this.info.setJatekVege("X nyert");
                this.jatekVege(tomb);
            }else if (kiertekel.getEllenorzes() === "O") {
                this.info.setJatekVege("O nyert");
                this.jatekVege(tomb);
            }else if (this.lepes === 9) {
                this.info.setJatekVege("Döntetlen");
            }
        });
    }
    jatekVege(tomb){
        this.info.setKovetkezoJatekos("")
        tomb.forEach(element => {
            element.aktiv = false;
        });
    }
}