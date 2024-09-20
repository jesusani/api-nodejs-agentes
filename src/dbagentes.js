import { Low } from 'lowdb';
import { JSONFilePreset } from 'lowdb/node';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'; 

const __dirname = dirname(fileURLToPath(import.meta.url));

let db;

export async function createConnectionAgentes() {

    const file = join(__dirname, 'agentes.json');
    const defaultData = { posts: [] }
     db = await JSONFilePreset(file, defaultData)
    await db.read();

    db.data ||= { tasks: [] };

    await db.write();
    //console.log(db);

}

export const getConnectionAgentes= () => db;

