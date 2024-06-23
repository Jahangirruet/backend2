const connectdb = require("./models/db.js");
const express = require("express");
const app = express();
const port = 3000;

connectdb()

.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err)=>{
    console.log(err);
})

