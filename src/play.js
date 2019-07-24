const MonsterGenerator = require('./generator/MonsterGenerator');

for (let level=0; level<100; level+=11) {
    console.log(`---- level ${level} ---`);
    MonsterGenerator.group(level).forEach( (m) => { console.log(m.toText()); } );
}

