process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var n;
    var dec;
    var str;
    
    // Read and save an integer, double, and String to your variables.
    n = readLine();
    dec = readLine();
    str = readLine();

    // Print the sum of both integer variables on a new line.
    console.log(Number(i)+Number(n));

    // Print the sum of the double variables on a new line.
    console.log((Number(d)+Number(dec)).toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s+str);

}