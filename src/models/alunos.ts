import mongoose from "mongoose";

const alunosSchema = new mongoose.Schema({

  imagem: String,
  bi1: String,
  bi2:String,
  id: {
    type: String,
    required: true,
  },
  nomeCompleto: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },

  nivel: {
    type: String,
  },

  dataNascimento: {
    type: String,

  },

  telefone: {
    type: Number,
    
  },

  sexo: {
    type: String,
    
  },

  idade: {
    type: Number,
    
  },
  onboarded: {
    type: Boolean,
    default: false,
  },
  numeroDeEstudante:{
    type:Number
  },

  anoInscricao:{
    type:Number
  }, 
  anoConfirmacao:[], 
  mesDeConfirmacao:[],
  faltas:[
    {
      numero:{type: Number},
      data:{type: Date}
    }
  ],

  professores:[
    {
      type:mongoose.Schema.ObjectId,
      ref:"Funcionarios"
    }
  ],

  propina:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Propina",
    },
  ],
  
  aulas:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Aulas",
    },
  ],
  
  atividades:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Atividades",
    },
  ],

  modeloDeAprendisagem:{
    type:String, 
    default:null
  }, 

  actived:{
    type:Boolean,
    default:false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});

const Alunos = mongoose.models.Alunos || mongoose.model("Alunos", alunosSchema);

export default Alunos;
