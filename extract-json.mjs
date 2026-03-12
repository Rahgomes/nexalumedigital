import { ESPECIALIDADES } from './src/lib/especialidades-data.ts';
import fs from 'fs';

const cleaned = ESPECIALIDADES.filter(x => x !== null);
fs.writeFileSync('./src/lib/especialidades.json', JSON.stringify(cleaned, null, 2));
console.log('Extraídos:', cleaned.length);
