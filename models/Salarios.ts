import mongoose from "mongoose";


const salariosSchema = new mongoose.Schema({

  idFuncionario: {
    type:mongoose.Schema.ObjectId,
    ref:"Funcionarios",
    required: true,
  },
  anoInscricao:{
    type:Date
  }, 
  anoConfirmacao:{
    type:Date
  }, 
  mesConfirmacao:{
    type:Number
  },
  modeloPagamento:{
    type:String
  },
  mesesPagamento:[]

  
 
});

const Salarios = mongoose.models.Salarios || mongoose.model("Salarios", salariosSchema);

export default Salarios;
