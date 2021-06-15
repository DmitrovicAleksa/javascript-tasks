import { Examination } from "./examination.mjs";
import { SUGAR_LEVEL_EXAMINATION } from "./examination.mjs";

export class SugarLevelExamination extends Examination {
    constructor(patient, dateString) {
        super(SUGAR_LEVEL_EXAMINATION, patient, dateString);
      
    }
}