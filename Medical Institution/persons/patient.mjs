import { Person } from "./person.mjs";

export class Patient extends Person {
    constructor(name, lastname, jmbg) {
        super(name, lastname);
        this.jmbg = jmbg;
        this.doctor = null;
        this.labaratoryExaminations = [];
        const d = new Date();
        // console.log(`${d}\nKreiran je pacijent ${this.name}`);
    }

    setDoctor(doctor) {
        this.doctor = doctor;
        // console.log(`${this.name} izabrao je za svog doktora ${this.doctor.name}`);
    }

    setExamination(labaratoryExamination) {
        this.labaratoryExaminations.push(labaratoryExamination);
    }

    izvrsiPregled(labaratoryExamination) {
        const founded =  this.labaratoryExaminations.find((element) => element.type  === labaratoryExamination.type)

        console.log(`Pacijent ${this.name} obavlja labaratorijski pregled ${founded.type}`);

     
        console.log(`Rezultati testa ${founded.type} su: - ${JSON.stringify(founded.vrednost)}`);
    }

   

}

