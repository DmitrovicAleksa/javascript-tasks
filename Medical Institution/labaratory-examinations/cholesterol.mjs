import { Examination } from "./examination.mjs";
import { CHOLESTEROL_LEVEL_EXAMINATION } from "./examination.mjs";

export class CholesterolExamination extends Examination {
    constructor(patient, dateString) {
        super(CHOLESTEROL_LEVEL_EXAMINATION, patient, dateString);
       
    }
}