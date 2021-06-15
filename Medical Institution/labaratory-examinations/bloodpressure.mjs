import { Examination } from "./examination.mjs";
import { BLOOD_PRESSURE_TYPE } from "./examination.mjs";

export class BloodPressureExamination extends Examination {
    constructor(patient, dateString) {
        super(BLOOD_PRESSURE_TYPE, patient, dateString); 
    }
}

