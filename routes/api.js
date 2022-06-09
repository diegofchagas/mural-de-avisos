import express from "express";
import Posts from "../model/Posts.js";
import bd from "../database/bd.js"
import cors from "cors";
const router = express.Router()

const options ={
    origin: "http://localhost:3000"
}

router.use(cors(options));

router.get('/all', (req,res)=>{

    const todosPosts = bd.posts

    res.json(todosPosts)
})

router.post('/new',(req,res)=>{
     const body = req.body
     
     const novoPost = new Posts( body.id, body.titulo, body.descricao)

     bd.posts.push(novoPost)


     res.json({

        resposta: `Novos posts adicionados ${novoPost.titulo}`
     })

})

export default router;