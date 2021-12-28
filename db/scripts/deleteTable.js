import {query} from '../index.js'

const sqlString = `DROP TABLE grocery`;

async function deleteTable(){
    const res = await query(sqlString);
}

deleteTable()