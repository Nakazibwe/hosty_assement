const express = require('express');

require('dotenv').config();

const connectDB = require('./config');
connectDB()

const app = express();

const port = process.env.PORT ;


//Middleware.
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes.
app.use('/api/hostels', require('./routes/hostel_routes'));
app.use('/api/users', require('./routes/user_routes'));
app.listen(port, () => {console.log(`API running on port ${port}`)});