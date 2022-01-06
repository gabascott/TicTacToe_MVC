class Kiertekel{
    constructor(tomb){
        this.tomb = tomb;
        console.log(this.tomb);
    }

    getVizszintes(){
        let ellX = "";
        this.tomb.forEach((element, index) => {
            ellX += element.ertek;
            if (index % 3 == 2) {
                ellX += "@";
            }
        });
        //console.log(ellX);
        return ellX;
    }

    getFuggoleges(){
        let ellY = "";
        for (let i = 0; i < 3; i++) {
            ellY += this.tomb[i].ertek + this.tomb[i+3].ertek + this.tomb[i+6].ertek;
            ellY += "@";
        }
        return ellY;
    }

    getAtlo(){
        let ellXY = this.tomb[0].ertek + this.tomb[4].ertek + this.tomb[8].ertek + "@";
        ellXY += this.tomb[2].ertek + this.tomb[4].ertek + this.tomb[6].ertek;
        //console.log(ellXY);
        return ellXY;
    }

    getEllenorzes(){
        let ell = this.getVizszintes() + "@" + this.getAtlo() + "@" + this.getFuggoleges();
        let allapot = "";
        if (ell.indexOf("XXX") >= 0) {
            allapot = "X";
        }else if (ell.indexOf("OOO") >= 0) {
            allapot = "O";
        }
        return allapot;
    }
}