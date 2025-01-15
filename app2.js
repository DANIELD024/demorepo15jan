const express=require("express")
const app=express()
app.use(express.json())
const PORT=5000
app.get("/",(req,res)=>{
    res.send("<h1>welcome</h1>")
})
app.get("/student",(req,res)=>{
    if (req.query.dept) {
        let dept=req.query.dept
        res.send(`<h1>details of student from ${dept} department</h1>`)
    }
    else{
        res.send("<h1>all students details</h1>")
}})
app.get("/student/:id",(req,res)=>{
    let studid=req.params.id
    console.log(studid)
    res.send(`<h1>Details of student with ID ${studid}</h1>`);
})
app.listen(PORT,()=>{console.log("server is running on",PORT);})