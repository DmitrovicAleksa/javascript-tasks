import {Doctor} from './persons/doctor.mjs';
import {Patient} from './persons/patient.mjs';
import {BloodPressureExamination} from './labaratory-examinations/bloodpressure.mjs';
import {SugarLevelExamination} from './labaratory-examinations/sugarlevel.mjs';
import {CholesterolExamination} from './labaratory-examinations/cholesterol.mjs';
import {makeLog} from "./persons/writefile.mjs";


// const data = fs.writeFile('file.txt','Hello','utf8',function(error){
//  if(error) throw error;
// });

// console.log(data);

makeLog({create:true});

// makeLog({create:false});
const doctor1 = new Doctor('Milan', 'Milanic', 'lekar opste prakse');
// makeLog({action : `Kreiran doktor ${doctor1.name}`});

const patitent1 = new Patient('Dragan','Dragic','123');
// makeLog({action : `Kreiran pacijent ${patitent1.name}`});
const bloodPresure = new BloodPressureExamination(patitent1,'11.12.2021. 09:30');
const sugarLevel = new SugarLevelExamination(patitent1,'01.04.2022. 11:40');


patitent1.setDoctor(doctor1);
// makeLog({action : `Pacijent ${patitent1.name} bira doktora ${doctor1.name}`});
doctor1.setPatient(patitent1);

doctor1.setScheduling(bloodPresure,patitent1);

doctor1.setScheduling(sugarLevel,patitent1);

patitent1.izvrsiPregled(bloodPresure);
// makeLog({action:`Pacijent ${patitent1.name} je obavio pregled za ${bloodPresure.type},rezultati su" - ${JSON.stringify(bloodPresure.vrednost)}`})
patitent1.izvrsiPregled(sugarLevel);
// makeLog({action:`Pacijent ${patitent1.name} je obavio pregled za ${sugarLevel.type},rezultati su" - ${JSON.stringify(sugarLevel.vrednost)}`})















