var num = 0;  // global variable

function button1() {
    num++;
    document.getElementById("demo").innerHTML = "Hello World " + num;
}