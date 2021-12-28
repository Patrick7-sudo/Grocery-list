import express from 'express';
const router = express.Router();
import {query} from './db/index.js';
import * as functionality from './module.js'

router.get('/',async (req,res)=>{
    const data = await functionality.getAll()
    res.json({success:true,'payload':data})
})

router.post('/',async (req,res)=>{
    const what = req.body;
    const data = await functionality.insertItem(what)
   return res.json({success:true,"paylod":data})
})

router.delete('/:id',async (req,res)=>{
    const {id}= req.params;

    const data = await functionality.deleteByID(id)
    return res.json({success:true,"paylod":data})
})

router.delete('/',async (req,res)=>{

    const data = await functionality.deleteAll()
    return res.json({success:true,"paylod":data})
})

export default router;