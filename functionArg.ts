
//Optional arguements
function param(value : string, valueTwo ?: number) {

    console.log(value); 

    if (valueTwo) {
        console.log(valueTwo);
    }
    
}

function colorType(wool : string, ...colors : string[]) {
    console.log("Wool: " + wool);
    for (let x of colors){
        console.log(x);
    }

}
