// Code editor function
function run() {
    let htmlCode = document.getElementById('html-code').value;
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode;
}

run();