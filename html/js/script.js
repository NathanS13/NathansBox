var input = document.getElementById("enterCommandText");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enterCommand").click();
        console.log("Success?")
    }
});
