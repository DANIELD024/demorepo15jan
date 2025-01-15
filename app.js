const express=require("express")
const app=express()
app.use(express.json())
const PORT=5000
app.get("/",(req,res)=>
{
    res.send("<h1>Home Page</h1>")
})
app.get("/about",(req,res)=>
{
    res.send("<h1>About Page</h1>")
})
app.get("/contact",(req,res)=>
{
    res.send("<h1>Contact Page</h1>")
})
//api calls
app.route("/products")
.get((req,res)=>
{
    res.send("all product details")
})
.post((req,res)=>
{
    console.log(req.body);
    res.send("POST Request successful, product saved")
})
.put((req,res)=>
{
        res.send("UPDATE Request successful, product updated")
})
.delete((req,res)=>
{
        res.send("DELETE Request successful, product deleted")
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})
