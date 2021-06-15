import fs from 'fs';

export function makeLog({action = "", create = false}) {
    const date = new Date();
    if (create) {
      fs.writeFile('file.txt','', function(err) {
        if(err) console.log(err);
      });
      return;
    }
    fs.appendFileSync('file.txt',`\n[${date}] ${action}`, function(err) {
        if(err) console.log(err);
      });

    }