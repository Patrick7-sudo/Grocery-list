import {query} from "../index.js";
import grocery from "../../data.js";
console.log(grocery)
async function populateData(){
    for(let i=0;i<grocery.length;i++){
        const item = grocery[i].item;
        const price =grocery[i].price;
        const store = grocery[i].store;
        const weight = grocery[i].weight;
       console.log(item)
       
        const res = await query(`INSERT INTO grocery(item,price,store,weight) VALUES ($1,$2,$3,$4) RETURNING *`,[item,price,store,weight]
        );
        console.log(res)
    }
}
populateData()