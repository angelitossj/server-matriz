const express = require('express');
const cors  = require('cors');

const port =3000





const app = express();
app.use(cors())
app.use(express.json())

app.use(require("./src/routes/rutasOperaciones"))

app.listen(port,()=>{
    console.log(`servidor escuchando en puerto ${port}`);


})