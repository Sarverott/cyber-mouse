/*
  cyber-mouse.js
  part of RATTISH-LANG project
  Sett Sarverott @ 2021
*/
try{
  const RattishFile=require("./file.js");
  const RattishDir=require("./dir.js");
}catch(e){null;}

class RattishDisk extends RattishDir{
  getPath(path){
    var pathElements=[];
    if(path.search("\\")>-1)pathElements=path.split("\\");
    if(path.search("/")>-1)pathElements=path.split("/");
    pathElements=pathElements.filter(
      function(value){return value!="";}
    );
    currentItem=this;
    for(var i in pathElements){
      currentItem=currentItem.getFile(pathElements[i]);
    }
    return currentItem;
  }
};

try{module.exports=RattishDisk;}catch(e){null;}
