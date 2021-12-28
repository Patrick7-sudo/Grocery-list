import express from 'express';

import router from './route.js'

const app = express();
app.use(express.json())
app.use('/',router)
// app.get('/',async (req,res)=>{
//     const data = await query(`SELECT * FROM grocery`)
//     res.json({success:true,'payload':data.rows})
// })

// app.post('/',async (req,res)=>{
//     const what = req.body;
//     console.log(what)
//     const item =what.item;
//     const store =what.store;
//     const weight=what.weight;
//     const price = what.price;

//     console.log(what)
//     const data = await query(`INSERT INTO grocery (item,store,weight,price) VALUES ($1,$2,$3,$4) RETURNING *;`,[item,store,weight,price])
//     const final =data.rows
//    return res.json({"paylod":final})
// })

// app.delete('/:id',async (req,res)=>{
//     const {id}= req.params;

//     const data = await query(`DELETE FROM grocery WHERE id=$1 RETURNING *`,[id])
//     const final =data.rows
//     console.log(data.rows)
//     return res.json({"paylod":final})
// })

// app.delete('/',async (req,res)=>{

//     const data = await query(`TRUNCATE grocery RESTART IDENTITY CASCADE;`)
//     const final =data.rows
//     console.log(data.rows)
//     return res.json({"paylod":final})
// })

app.listen(3000 ,()=>{
    console.log(`connected to server`)
})