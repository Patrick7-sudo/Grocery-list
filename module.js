import {query} from './db/index.js';

export async function getAll(){
    const data = await query(`SELECT * FROM grocery`)

    return data.rows
}

export async function insertItem(newItem){
    const item =newItem.item;
    const store =newItem.store;
    const weight=newItem.weight;
    const price = newItem.price;


    const data = await query(`INSERT INTO grocery (item,store,weight,price) VALUES ($1,$2,$3,$4) RETURNING *;`,[item,store,weight,price])

    return data.rows
}

export async function deleteByID(id){
    const data = await query(`DELETE FROM grocery WHERE id=$1 RETURNING *`,[id])

    return data.rows;
}

export async function deleteAll(){
     const data = await query(`TRUNCATE grocery RESTART IDENTITY CASCADE;`)

     return data.rows
}