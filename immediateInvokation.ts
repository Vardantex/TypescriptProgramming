var count = 0;
var letters : string[] = ["A", "B", "C"]

//Immediate invokation: will call immediately 
(function () {

    //for each loop 
    for(let x in letters) {
        count++;
    }

})();
