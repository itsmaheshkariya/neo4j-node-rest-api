import { Router } from "express";
import userModel from '../models/user'
const user = Router()


user.get('/', async (req,res)=>{
    const result = await userModel.findAll()
    res.json(result)
})
user.get('/:id', async (req,res)=>{
    const result = await userModel.findById(req.params.id)
    res.json(result)
})
user.post('/', async (req,res)=>{
    const result = await userModel.create(req.body)
    res.json(result)
})
user.put('/:id', async (req,res)=>{
    const result = await userModel.findByIdAndUpdate(req.params.id, req.body)
    res.json(result)
})
user.delete('/:id', async (req,res)=>{
    const result = await userModel.findByIdAndDelete(req.params.id)
    res.json(result)
})

export default user