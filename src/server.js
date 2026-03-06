import express from 'express';
import "dotenv/config";
import authRoute from './routes/auth.route.js';


const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API connected")
})

app.use("/auth",authRoute)


app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})