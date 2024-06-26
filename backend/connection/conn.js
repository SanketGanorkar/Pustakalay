const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://codemaster:lOyDImjIfHfiAxwp@cluster0.lpdllre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>
        console.log('connected')
    )
    .catch(()=>{
        console.log('not connected')
    })