async function sleep(t) {
  return new Promise(function(resolve){
    setTimeout(resolve, t);
  });
}
function standardKeypress(){

}
function standardKeyrelease(){

}
function standardInput(){
  return prompt("input data");
}
function standardOutput(data){
  
}
function standardDebug(data){

}
function standard
function standardBehaviour(){
    var cyberMouse=new RattishInterpreter();
    cyberMouse.addCommands(
      "basic",
      ["<",function(arguments){
        standardDebug("write on output:", arguments);
        standardOutput(arguments);
      }],
      [">",function(arguments){
        standardDebug("awaiting input...");
        standardDebug("received: "+arguments);

      }],
      [".",function(arguments){
        standardDebug("waiting "+arguments);
        await sleep(parseInt(arguments));
        standardDebug("sleep ends");
      }],
      ["_",function(arguments){
        standardDebug("pressing key "+arguments);
      }],
      ["^",function(arguments){

      }]
    );
    cyberMouse.addCommands(
      "variables",
      ["$",function(arguments){

      }],
      ["=",function(arguments){

      }],
      ["+",function(arguments){

      }],
      ["-",function(arguments){

      }],
      ["*",function(arguments){

      }],
      [":",function(arguments){

      }],
      ["}",function(arguments){

      }],
      ["{",function(arguments){

      }]
    );
    cyberMouse.addCommands(
      "logics",
      ["\\",function(arguments){

      }],
      ["/",function(arguments){

      }],
      ["|",function(arguments){

      }],
      [";",function(arguments){

      }],
      ["&",function(arguments){

      }],
      ["~",function(arguments){

      }]
    );
    cyberMouse.addCommands(
      "procedures",
      ["[",function(arguments){

      }],
      ["]",function(arguments){

      }],
      ["%",function(arguments){

      }],
      ["?",function(arguments){

      }],
      ["!",function(arguments){

      }]
    );
    cyberMouse.addCommands(
      "mechanics",
      ["@",function(arguments){

      }],
      ['"',function(arguments){

      }],
      ["'",function(arguments){

      }]
    );
    cyberMouse.addCommand("#");
  }
