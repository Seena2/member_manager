import express from 'express';
import cors from 'cors';
import records from './routes/record.js';

const PORT= process.env.PORT||5050;
//initialize the express app
const app=express();

//implement middleware
app.use(cors());
app.use(express.json());
app.use("/record", records);   // represents   "/record/id"  to get specific document with its id and "/record/" to get all records/documents


//start the express server to listen for request at specified port number
app.listen(PORT,()=>{
    console.log(`Server listing on port ${PORT}`);
});