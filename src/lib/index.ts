// place files you want to import through the `$lib` alias in this folder.
import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.API_TOKEN);
