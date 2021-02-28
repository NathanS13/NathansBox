/*
$('input[type="enterCommandText"]').keypress(function (e) {
    var code = e.keyCode || e.which;
    console.log("test 3");
    if (code === 13) {
        console.log("test 4");
    }
    e.preventDefault();
    $("enterCommandText").submit(); /*add this, if you want to submit form by pressing `Enter`
    window.location.replace("http://www.w3schools.com");
});
*/
document.getElementById('enterCommandText').onkeydown = function(e){
    console.log("fasdas");
    if(e.keyCode == 13){
     /*$('#enterCommand2').click();*/
        document.getElementById("enterCommand").click();
        console.log("fasdas2");
    }
};
document.getElementById('enterCommandText').onkeydown = function(e){
    var input = document.getElementById('enterCommandText').value;
    if(e.keyCode == 13){
        var rawInput = document.getElementById('enterCommandText').value.split('\n');
        console.log("in pop: " + rawInput)
        input = rawInput.pop();

        console.log("in enter: " + input)
        switch(input.toLowerCase()) {
            case "test":
                console.log("we found test!");
                document.getElementById("enterCommand").click();
            break;

            default:
                console.log("in default")
        }
    }
};

document.getElementById('enterCommandText').onmousedown = function(e){
    document.getElementById('enterCommandText').value = "";
};





/*
var input = document.getElementById("enterCommandText");
input.addEventListener("keydown", function(event) {
    console.log("test1" + event.keyCode);
    if (event.keyCode === 13) {
        console.log("test2");
        event.preventDefault();
        document.getElementById("enterCommand2").click();
        document.getElementById("enterCommand").value("worked!");
    }
});
*/