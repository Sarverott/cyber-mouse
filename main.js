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
function standardOutput(){

}
function standardDebug(){

}

var prospect={
  firstsetupBehaviour(){
    var cyberMouse=new RattishInterpreter();
    cyberMouse.addCommands(
      "basic",
      ["<",function(arguments){
        standardDebug("write on output:", arguments);
        standardOutput(arguments);
      }],
      [">",function(arguments){
        standardDebug("awaiting input...");
        standardDebug("");

      }],
      [".",function(arguments){
        console.log("waiting");
        await sleep(parseInt(arguments));
      }],
      ["_",function(arguments){

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
}
