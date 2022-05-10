const express = require('express')

const app = express()
const path = require('path')
//console.log(app);


app.get("/", (req, res)=>{
     res.sendFile(path.join(__dirname,'views','index.html'),(err)=>{
         if (err) {
             console.log(err);

         }
     })
}

app.get("/api/sass", (req, res)=>{
    res.write('<h1>Some books',(err)=>{
        if (err) {
            console.log(err);
        }
    })
}

app.get("/api/components", (req, res)=>{
    res.write('<h1>Some books',(err)=>{
        if (err) {
            console.log(err);
        }
    })
}

app.get("/api/javascript", (req, res)=>{
    res.write('<h1>Some books',(err)=>{
        if (err) {
            console.log(err);
        }
    })
}

try {
    app.listen(3000,()=>{
        console.log('Server working on port',3000)
    })
} catch (error) {
    console.log(error);
    
}