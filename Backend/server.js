const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
var fs = require('fs');
var busboy = require('connect-busboy');

const mongoSanitize = require('express-mongo-sanitize');


// To remove data, use:
const {
  verifyAccessToken
} = require('./Helpers/JWT_methods.help')

const app = express();
const port = process.env.PORT || 5000;


app.use(mongoSanitize());
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", parameterLimit: 500000000 }));

const uri = process.env.ATLAS_URI;
 
mongoose.connect(uri, { useNewUrlParser: true }
)
const db = mongoose.connection;
db.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./Routes/Authentication');
const dashboardRouter = require('./Routes/Dashboard');
const projectRouter = require('./Routes/Project')
const searchRouter = require('./Routes/Search')



app.use('/api/auth/', usersRouter)
app.use('/api/search/',searchRouter)
app.use('/api/dash/', verifyAccessToken ,dashboardRouter)
app.use('/api/project/', verifyAccessToken ,projectRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});