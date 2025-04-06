import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static file
// s


// Route to serve the QR image when requested
app.get("/",async(req,res)=>{
   
    res.render("index.ejs",{qrImg:null})
    
})

app.post("/submit",async(req,res)=>{
    try{
    const url=req.body.url
    if(!url){
        return res.render("index.ejs",{qrImg:null})
    }
    const resp= `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`

    
    res.render("index.ejs",{qrImg:resp})
    }catch(error){
        console.log("error")
    }
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});