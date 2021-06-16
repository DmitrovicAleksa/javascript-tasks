import { Person } from "./person.mjs";
import {makeLog} from "./writefile.mjs";

export class Patient extends Person {
    constructor(name, lastname, jmbg) {
        super(name, lastname);
        this.jmbg = jmbg;
        this.doctor = null;
        this.labaratoryExaminations = [];
        const d = new Date();
        makeLog({action : `Kreiran pacijent ${this.name}`});
        // console.log(`${d}\nKreiran je pacijent ${this.name}`);
    }

    setDoctor(doctor) {
        this.doctor = doctor;
        makeLog({action : `Pacijent ${this.name} bira doktora ${this.doctor.name}`});
    }

    setExamination(labaratoryExamination) {
        this.labaratoryExaminations.push(labaratoryExamination);
    }

    izvrsiPregled(labaratoryExamination) {
        const founded =  this.labaratoryExaminations.find((element) => element.type  === labaratoryExamination.type)

        makeLog({action:`Pacijent ${this.name} je obavio pregled za ${labaratoryExamination.type},rezultati su" - ${JSON.stringify(labaratoryExamination.vrednost)}`})

        console.log(`Pacijent ${this.name} obavlja labaratorijski pregled ${founded.type}`);

     
        console.log(`Rezultati testa ${founded.type} su: - ${JSON.stringify(founded.vrednost)}`);
    }

   

}

