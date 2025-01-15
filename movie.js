//movieapi
//API for performing CRUD operation
const express=require("express")
const app=express()
app.use(express.json())
//In Memory Storage - Recreates every time server restart
let movies=[{"id":"1","name":"batman","genre":"action"},{"id":"2","name":"good fellas","genre":"crime"},{"id":"3","name":"godfather","genre":"drama"}]

app.route("/movies")
.get((req,res)=>
{
    res.send(movies)
}).post((req,res)=>
{
    if(req.body)
    {
        movies.push(req.body)
        res.send("Movie saved successfully!")
    }
    else
        res.send("Enter details in body")
})

app.listen(4500,()=>{console.log("server running successfully");})

