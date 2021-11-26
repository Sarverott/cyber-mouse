/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/

class RattishFile{
  constructor(name, cwd, content=""){
    this.cwd=cwd;
    this.setName(name);
    if(typeof(content)=="string")this.content=content;
  }
  get type(){
    return this.constructor.name.substring(7).toLowerCase();
  }
  set write(content){
    if(!this.hasOwnProperty("content"))throw "WRITE_OF_NON_PLAINTEXT_FILE";
    this.content=content;
  }
  set append(content){
    if(!this.hasOwnProperty("content"))throw "APPEND_OF_NON_PLAINTEXT_FILE";
    this.content+=content;
  }
  getFile(name){
    throw "PATH_NOT_EXISTS";
  }
  get read(){
    if(!this.hasOwnProperty("content"))throw "READ_OF_NON_PLAINTEXT_FILE";
    return this.content;
  }
  setName(label){
    this.name=label;
  }
  equalsName(label){
    return label==this.name;
  }
};

try{module.exports=RattishFile;}catch(e){null;}
