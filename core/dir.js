/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/
try{
  const RattishFile=require("./file.js");
}catch(e){null;}

class RattishDir extends RattishFile{
  constructor(name, parrentDir){
    super(name, parrentDir, null);
    this.initSpace();
  }
  initSpace(){
    this.space=[];
  }
  get ls(){
    var namesList=[];
    for(var i in this.space){
      namesList.push(this.space[i].name);
    }
    return namesList;
  }
  delete(name){
    this.space=this.space.filter(
      function(value){
        return value.name!=name;
      }
    );
  }
  createDir(name){
    return this.create(name,"dir");
  }
  createFile(name){
    return this.create(name,"file");
  }
  create(name, type="file"){
    if(this.contains(name))return null;
    var tmpFile=null;
    if(type=="dir")tmpFile=new RattishDir(name, this);
    if(type=="file")tmpFile=new RattishFile(name, this);
    if(tmpFile!=null)this.space.push(tmpFile);
    return tmpFile;
  }
  getFile(name){
    for(var i in this.space){
      if(this.space[i].equalsName(name))return this.space[i];
    }
    throw "PATH_NOT_EXISTS";
  }
  contains(name){
    var searchingFilename=false;
    for(var i in this.space){
      if(this.space[i].equalsName(name))searchingFilename=true;
    }
    return searchingFilename;
  }
};

try{module.exports=RattishDir;}catch(e){null;}
