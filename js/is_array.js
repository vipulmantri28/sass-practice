const trueOnly = [];
function test(value){
    if (value !== false &&  value !== "" && value !== 0 && value !== " ") {
        trueOnly.push(value)
    } 
}
function check(data) {
    if (Array.isArray(data)) {
        console.log("The input provided is Array");
        data.filter(test);
        console.log(trueOnly);
        console.log(Math.max(...data));
    }else {
        console.log("The input provided is ", typeof data)
    }
}