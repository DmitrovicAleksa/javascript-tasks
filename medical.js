const BLOOD_PRESSURE_TYPE = 'blood_presure';
const SUGAR_LEVEL_EXAMINATION = 'sugar_level';
const CHOLESTEROL_LEVEL_EXAMINATION = 'cholesterol_level';

// CLASS PERSON
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

// CLASS DOCTOR
class Doctor extends Person {
    constructor(name, lastname, specialty) {
        super(name, lastname);
        this.specialty = specialty;
        this.patients = [];
    }

    get nameDoctor() {
        return this.name;
    }
    get lastnameDoctor() {
        return this.lastname;
    }
    get specialtyDoctor() {
        return this.specialty;
    }
    set nameDoctor(name) {
        this.name = name;
    }
    set lastnameDoctor(lastname) {
        this.lastname = lastname;
    }
    set specialtyDoctor(specialty) {
        this.specialty = specialty;
    }
    setPatient(patient) {
        this.patients.push(patient);
    }
    setScheduling(scheduling, patient) {
        for (let i = 0; i < this.patients.length; i++) {
            if (this.patients[i].name === patient.name) {
                this.patients[i].setExamination(scheduling);
            }
        }
    }

}

// CLASS PATIENT
class Patient extends Person {
    constructor(name, lastname, jmbg, doctor) {
        super(name, lastname);
        this.jmbg = jmbg;
        this.doctor = doctor;
        this.labaratoryExaminations = [];
    }

    get namePatient() {
        return this.name;
    }
    get lastnamePatient() {
        return this.lastname;
    }
    get jmbgPatient() {
        return this.jmbg;
    }
    get doctorPatient() {
        return this.doctor.name;
    }
    set namePatient(newName) {
        this.name = newName;
    }
    set lastnamePatient(lastname) {
        this.lastname = lastname;
    }
    set jmbgPatient(jmbg) {
        this.jmbg = jmbg;
    }
    set doctorPatient(doctor) {
        this.doctor = doctor;
    }
    setExamination(labaratoryExamination) {
        this.labaratoryExaminations.push(labaratoryExamination);
    }
}



class Examination {
    constructor(type, patient, dateString) {
        this.type = type;
        this.patient = patient;
        this.schedueledDate = new Date(dateString);
        this.vrednost = {};
        switch (type) {
            case BLOOD_PRESSURE_TYPE:
                this.vrednost = {
                    lowerValue: null,
                    upperValue: null,
                    pulse: null
                }
                break;
            case SUGAR_LEVEL_EXAMINATION:
                this.vrednost = {
                    level: null,
                    lastLunchTime: null
                }
                break;
            case HOLESTEROL_LEVEL_EXAMINATION:
                this.vrednost = {
                    level: null,
                    lastLunchTime: null
                }
                break;
            default:
                throw new Error('Examination type does not exist');
        }
    }
}


class BloodPressureExamination extends Examination {
    constructor(patient, dateString) {
        super(BLOOD_PRESSURE_TYPE, patient, dateString);
        this.patient = patient;
        this.dateString = dateString;
    }
}
class SugarLevelExamination extends Examination {
    constructor(patient, dateString) {
        super(SUGAR_LEVEL_EXAMINATION, patient, dateString);
        this.patient = patient;
        this.dateString = dateString;
    }
}
class CholesterolExamination extends Examination {
    constructor(patient, dateString) {
        super(HOLESTEROL_LEVEL_EXAMINATION, patient, dateString);
        this.patient = patient;
        this.dateString = dateString;
    }
}


const doctor = new Doctor('Milan', 'Milanic', 'Lekar opste prakse');
const patient = new Patient('Dragan', 'Dragic', '123', doctor);

doctor.setPatient(patient);
patient

// doctor.patients.forEach(patient => {
//     console.log('Pacijenti doktora ' + doctor.name + ': ' + patient.name);
// });

// PACIJENT BIRA DOKTORA
console.log('Pacijent ' + patient.name + ' izabrao je za doktora ' + doctor.name);

// KREIRANI PREGLEDI
const bloodPresure = new BloodPressureExamination(patient, '20.03.2022. 19:30');
const sugarLevel = new SugarLevelExamination(patient, '25.06.2021. 08:15');

// ZAKAZIVANJE
doctor.setScheduling(sugarLevel, patient);
console.log('Doktor ' + doctor.name + ' je zakazao pacijentu ' + patient.name + ' pregled ' + patient.labaratoryExaminations[0].type + ' datuma: ' + patient.labaratoryExaminations[0].dateString);

// REZULTATI
sugarLevel.vrednost.level = 5.5;
sugarLevel.vrednost.lastLunchTime = '22:15';
console.log('Pacijent ' + patient.name + " rezultati pregleda- vrednost: " +  sugarLevel.vrednost.level + '/ vreme poslednjeg obroka: ' + sugarLevel.vrednost.lastLunchTime);

// ZAKAZIVANJE DRUGOG PREGLEDA
doctor.setScheduling(bloodPresure, patient);
console.log('Doktor ' + doctor.name + ' je zakazao pacijentu ' + patient.name + ' pregled ' + patient.labaratoryExaminations[1].type + ' datuma: ' + patient.labaratoryExaminations[1].dateString);

// REZULTATI DRUGOG PREGLEDA
bloodPresure.vrednost.lowerValue = 80;
bloodPresure.vrednost.upperValue = 120;
bloodPresure.vrednost.lowerValue = 76;
console.log('Pacijent ' + patient.name + " rezultati pregleda- donji: " + bloodPresure.vrednost.lowerValue 
+ "/ gornji: " + bloodPresure.vrednost.upperValue   + "/ puls: " + bloodPresure.vrednost.lowerValue) ;







