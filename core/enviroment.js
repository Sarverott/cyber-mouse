/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/
try{
  const RattishVariable=require("./variable.js");
}catch(e){null;}

class RattishEnviroment{
  constructor(){
    this.variables={};
    this.procedures={};
  }
  pointVariable(name){
    if(this.variables.hasOwnProperty(name)){
      this.variables[name]=new RattishVariable();
    }
    return this.variables[name];
  }
};

try{module.exports=RattishEnviroment;}catch(e){null;}
