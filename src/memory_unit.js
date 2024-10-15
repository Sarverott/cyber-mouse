
class VariableCell{
    constructor(){
        this.isSet=false;
        this.value=""
    }
}

class MemoryUnit{
    constructor(){
        this.currentContext=0;
        this.variablesSet=[]
    }
}