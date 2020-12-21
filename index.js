const express=require("express");
const app=express();
const fs=require("fs");
const fileUpload=require("express-fileupload");
const compare=require("./compare")
const append=require("./append")
const port=8000;

app.use(fileUpload())

let similarityHtml='<div class="progress"> <div class="progress-bar" role="progressbar" style="width: #%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$%</div></div>';


const html=fs.readFileSync(`${__dirname}/form.html`,{encoding:"utf8"});
app.get("/",(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html);
    res.end();
})

app.post("/upload",function(req,res){
    // let htm=fs.readFileSync(`${__dirname}/form1.html`,{encoding:"utf8"});
    // console.log(req.files.cv)
    const jobdescription=req.body.jobdescription
    const cvData=req.files.cv.data.toString()
    const similarty=compare.similarity(jobdescription,cvData)
   

    similarityHtml=similarityHtml.replace("$",similarty);
    similarityHtml=similarityHtml.replace("#",similarty);
    let v=append.appendHTML(html,similarityHtml,"</form>")
    v=append.aHTML(v,jobdescription,"</textarea>")
   
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(v);
    res.end();
    
})

app.listen(port,()=>{
    console.log(`You application is running at http://localhost:${port}`)
})