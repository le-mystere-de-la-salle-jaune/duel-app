
export class Stagiaire {
    id:number;
    nom:string;
    prenom:string;
    email:string;
    photoUrl:string;

    constructor(_id:number, _nom:string, _prenom:string, _email:string, _photoUrl:string) {
        this.id = _id;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _email;
        this.photoUrl = _photoUrl;
    }

    toStagiaireServeur():any {
        const stagiaireServeur = Object.assign(this, {"photo_url" : this.photoUrl});
        delete stagiaireServeur.photoUrl
        return stagiaireServeur
    }

    toString() {
        return this.prenom + ' ' + this.nom;
    }
}

export class Duel {
    id:number;
    stagiaireA:Stagiaire;
    stagiaireB:Stagiaire;
    quizz:Quizz;

    constructor(_id:number, _stagiaireA:Stagiaire, _stagiaireB:Stagiaire, _quizz:Quizz) {
        this.id = _id;
        this.stagiaireA = _stagiaireA;
        this.stagiaireB = _stagiaireB;
        this.quizz = _quizz;
    }

    toString(stagiaireChoisi:number) {
        switch (stagiaireChoisi) {
            case 1:
                return this.quizz.titre + ' / ' + this.stagiaireA.prenom + ' ' + this.stagiaireA.nom;
            case 2:
                return this.quizz.titre + ' / ' + this.stagiaireB.prenom + ' ' + this.stagiaireB.nom;
            default:
                console.log('Le numéro du stagiaire doit être 1 ou 2');
        }
        
    }
}

export class Quizz {
    id:number;
    titre:string;
    questions:Question[];

    constructor(_id:number, _titre:string, _questions:Question[]) {
        this.id = _id;
        this.titre = _titre;
        this.questions = _questions;
    }
}

export class Question {
    id:number;
    titre:string;

    constructor(_id:number, _titre:string) {
        this.id = _id;
        this.titre = _titre;
    }
}