import {query} from '../index.js'

const sqlString = `CREATE TABLE IF NOT EXISTS grocery(id SERIAL PRIMARY KEY,item TEXT, store TEXT, weight TEXT, price TEXT);`;

async function createTable(){
    const res = await query(sqlString);
}

createTable()