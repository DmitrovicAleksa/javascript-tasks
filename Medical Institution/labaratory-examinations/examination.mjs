import { fstat } from "fs";

const BLOOD_PRESSURE_TYPE = 'blood_presure';
const SUGAR_LEVEL_EXAMINATION = 'sugar_level';
const CHOLESTEROL_LEVEL_EXAMINATION = 'cholesterol_level';

class Examination {
    constructor(type, patient, dateString) {
        this.type = type;
        this.patient = patient;
        this.timeScheduling = new Date(dateString);
        this.vrednost = {};
        switch (type) {
            case BLOOD_PRESSURE_TYPE:
                this.vrednost = {
                    lowerValue: 120,
                    upperValue: 80,
                    pulse: 76
                }
                break;
            case SUGAR_LEVEL_EXAMINATION:
                this.vrednost = {
                    level: 5.5,
                    lastLunchTime: '22:30'
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

export {BLOOD_PRESSURE_TYPE,SUGAR_LEVEL_EXAMINATION,CHOLESTEROL_LEVEL_EXAMINATION,Examination};

