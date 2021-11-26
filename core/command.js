/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/
try{
  const RattishNamespace=require("./namespace.js");
}catch(e){null;}

class RattishCommand{
  constructor(command, engine){
    this.engine=engine;
    this.namespace=null;
    this.behaviour=function(){};
    this.label="<unlabeled>";
    this.commandChar=command;
  }
  execute(argument){
    this.behaviour(argument);
  }
  setManualLink(manualLink){
    this.manualLink=manualLink;
    return this;
  }
  setBehaviour(behaviour){
    this.behaviour=behaviour;
    return this;
  }
  setLabel(label){
    this.label=label;
    return this;
  }
  setNamespace(namespace){
    if(!this.engine.namespaces.hasOwnProperty(namespace.toLowerCase())){
      this.engine.namespaces[namespace.toLowerCase()]=new RattishNamespace(namespace.toUpperCase());
    }
    this.engine.namespaces[namespace.toLowerCase()].commands.push(this);
    this.namespace=this.engine.namespaces[namespace.toLowerCase()];
    return this;
  }
  get getNamespace(){
    if(this.namespace==null)return "NONDESCRIBED";
    else return this.namespace.name;
  }
};

try{module.exports=RattishCommand;}catch(e){null;}
