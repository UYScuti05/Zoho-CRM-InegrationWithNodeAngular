const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const leadsRoutes = require('./routes/leads.js');
const cors = require('cors');
var multer = require('multer');
var upload = multer();

dotenv.config({path:'config.env'});
const app = express();
const PORT = process.env.PORT || 6000;
app.use(cors());
// app.use(bodyParser.json());
// app.use(upload.array()); 
// app.use(express.static('public'));

app.use('/leads', leadsRoutes);

app.get('/',function(req,res){
    res.send("Root Api of Server...");
});

app.listen(PORT,()=>{
    console.log(`Server is active! click here: http://localhost:${PORT}`)
});