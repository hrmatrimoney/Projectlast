import cors from "express"
// import cors from "cors"
import mongoose from "mongoose"

const app = express()
 app.use(express.json())

app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB",{
    userNewUrlParser: true,
    useUnifiedTopology: true
}, () =>{
    console.log("DB connected")
})

app.get("/", (req,res) =>{
    res.send("My API")
})

app.listen(9002,() =>{
    console.log("Be started at port 9002")
})


