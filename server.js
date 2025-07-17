import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine','hbs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post('/bmi',(req,res)=>{
  const height=req.body.height
  const weight=req.body.weight
  const age=req.body.age 
  let height_in_metr =height/100
  let bmi=weight/(height_in_metr*height_in_metr)
  bmi = parseFloat(bmi.toFixed(2));
  let data={height,weight,age,bmi}
  res.render('submit',data)
})






function print() {
  console.log("server started at", port);
}
app.listen(port, "0.0.0.0", print);


