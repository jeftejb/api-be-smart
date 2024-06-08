
import bodyParser  from "body-parser" ;
import  mongoose  from "mongoose" ;
//const nodemailer = require("nodemailer");
import express from "express";
import cors from "cors";
const app:any = express();
const port:any = process.env.PORT || 8080 ;



app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jeftesambangojb:oepd48XXfcHo0yeJ@vandjabesmart.kc1ckt5.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Conexao bem sucedida com o mongo db")
}).catch((error:any)=>{
console.log("Algo deu errado ao fazer a conexao", error)
})

app.listen(port, ()=>{
    console.log("O servidor esta rodando na PORTA:8080")
})


// rotas 
import Funcionarios from "./source/models/funcionarios"
import Salarios from "./source/models/Salarios"

app.post("/funcionario", async(req:any, res:any) =>{
  const email:any = req.body;

    try {
      
        const findFuncionario =  await Funcionarios.findOne({ email: email?.email}).populate({
          path: "salarios",
          model: Salarios,
        });

        return res.json(findFuncionario);
      

      } catch (error: any) {
       // throw new Error(`Failed to fetch user: ${error.message}`);
      }
})

app.get("/funcionarios", async(req:any, res:any) =>{
    try {
      
        const findFuncionario =  await Funcionarios.find({}).populate({
          path: "salarios",
          model: Salarios,
        });

      
        return res.json(findFuncionario);
    

      } catch (error: any) {
       // throw new Error(`Failed to fetch user: ${error.message}`);
      }
})


app.post("/presenca", async(req:any, res:any)=>{
    const id:any = new mongoose.Types.ObjectId(req.body.id)
    const dadosPresenca:any = {data:req.body.data, hora:req.body.hora}
    try {
        
        await Funcionarios.findOneAndUpdate({_id:id}, {
            $push : {presencas:dadosPresenca},
            
          });
          return res.status(200).json({mesagem:"Assinatura feita com sucesso"});
    } catch (error:any) {
        return{mesagem:"error"}
        
    }

})