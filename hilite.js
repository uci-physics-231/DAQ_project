alert("ah");

function takeValue(val) {
    var value = val;
    //   var value = document.getElementById('input');
if (value > 20) {
    value.fontcolor('red');
}
else if (value < 20 && value > 15) {
    value.fontcolor('yellow');
}
else {
    value.fontcolor('black');
} 
return value;
}

//var input = prompt("Enter Number");
//takeValue(input);