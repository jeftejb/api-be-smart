import mongoose from "mongoose";

const funcionariosSchema = new mongoose.Schema({

  imagem: String,
  bi1: String,
  bi2:String,
id:{type:String},
  email:{
    type:String
  },

  nomeCompleto: {
    type: String,
   
  },


  turmas:[ 
    {
    type: String,
  }
],

  dataNascimento: {
    type: String,

  },

  telefone: {
    type: Number,
    
  },

  sexo: {
    type: String,
    
  },

 
  onboarded: {
    type: Boolean,
    default: false,
  },

  admin:{
    type:Boolean,
    default:false,
    require:true
  },
  salarios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Salarios",
    },
  ],

 funcoes : [{
    type:String
 }],

 linkAula:[
  {
    link:{type:String},
    nivel:{type:String}
  }
],

 horario:[
  {
    periodo:{type:String},
    hora:{type:String}
  }
],
presencas:[
    {
      data:{type:String},
      hora:{type:String}
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});

const Funcionarios = mongoose.models.Funcionarios || mongoose.model("Funcionarios", funcionariosSchema);

export default Funcionarios;
