/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/
class RattishVariable{
  constructor(value="", type="str"){
    this.value=value;
    this.type=type;
  }
  get VARTYPES(){
    return [
      "str",
      "int",
      "nul"
    ];
  }
}

try{module.exports=RattishVariable;}catch(e){null;}
