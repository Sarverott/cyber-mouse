/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/
try{
  const RattishDisk=require("./disk.js");
  const RattishEnviroment=require("./enviroment.js");
  const RattishCommand=require("./command.js");
}catch(e){null;}

class RattishInterpreter{
  constructor(){
    this.namespaces={};
    this.commands={};
    this.root=new RattishDisk("SD0");
    this.enviroment=new RattishEnviroment();
    this.root.createFile("payload.rat").write=`# insert code...`;
  }
  addCommand(command){
    var tmpCommand=new RattishCommand(command, this);
    this.commands["0x"+command.charCodeAt(0).toString(16)]=tmpCommand;
    return tmpCommand;
  }
  addCommands(namespace, ...commands){
    for(var i in commands){
      this.addCommand(commands[i][0]).setNamespace(namespace).setBehaviour(commands[i][1]);
    }
  }
  run(){
    var codeLines=this.root.getPath("/payload.rat").read
      .split("\r").join("")
      .split("\t").join(" ")
      .split("\n");
    for(var i in codeLines){
      try{
        this.commands["0x"+codeLines[i].charCodeAt(0)].execute(codeLines[i].substring(1));
      }catch(e){
        console.log(e);
      }
    }
  }
};

try{module.exports=RattishInterpreter;}catch(e){null;}
