import { Person } from "./person.mjs";
import {makeLog} from "./writefile.mjs";

export class Doctor extends Person {
    constructor(name, lastname, specialty) {
        super(name, lastname);
        this.specialty = specialty;
        this.patients = [];
        const d = new Date();
        makeLog({action : `Kreiran pacijent ${this.name}`});
        // console.log(`[${d}] \nKreiran je doktor ${this.name}`);
    }

    setPatient(patient) {
        this.patients.push(patient);
    }

    setScheduling(scheduling, patient) {
          const founded =  this.patients.find((element) => element.name  === patient.name)

          founded.setExamination(scheduling);
          console.log(`${this.name} zakazao pregled ${scheduling.type} pacijentu ${patient.name} za datum :\n[${scheduling.timeScheduling}]`);
        
    }

}