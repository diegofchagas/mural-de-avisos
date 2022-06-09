import express from "express";
import path from "path"
import api from "./routes/api.js"

const port = 3000;

const app = express()
app.use(express.json())

app.use("/api", api)
app.use(express.static(path.join("public")))



app.listen(port, ()=>{ console.log("Server running"), port})