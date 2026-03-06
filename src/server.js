import express from 'express';
import "dotenv/config";
import authRoute from './routes/auth.route.js';
import errHandler from './middlewares/errHandler.js';
import usersRoute from './routes/users.route.js';
import doctorsRoute from './routes/doctors.route.js';


const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API connected")
})

app.use("/auth",authRoute)
app.use("/users",usersRoute)
app.use("/doctors",doctorsRoute)


app.use(errHandler)

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})