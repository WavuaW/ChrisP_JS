var myGlobal = 10;

function func1(){
    oopsGlobal = 5;
}

function func2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobat: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

func1();
func2();