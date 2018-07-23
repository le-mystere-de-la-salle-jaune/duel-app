export class Stagiaire {
    private id:number;
    private nom:string;
    private prenom:string;
    private email:string;
    private photoUrl:string;

    constructor(_id:number, _nom:string, _prenom:string, _email:string, _photoUrl:string) {
        this.id = _id;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _email;
        this.photoUrl = _photoUrl;
    }

    choisirStagiaire() {
        console.log(`Nom : ${this.nom}\nPrénom: ${this.prenom}`);
    }

    toString() {
        return this.nom + ' ' + this.prenom;
    }
}