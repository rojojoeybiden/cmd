let input = document.getElementById('input');
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if(input.value === "Calculator" || input.value === "calculator"){
        console.log(input.value);
    }
    else if(input.value === "Love Lace" || input.value === "love lace"){
        console.log(input.value);
    }
    else if(input.value === "Credits" || input.value === "Credits"){
        console.log(input.value);
    }
    else if(input.value === "Return" || input.value === "return"){
        window.open("index.html", "_self");
    }
    else {
        document.getElementById('error').innerHTML = input.value + " is not recognized as an internal or external command, operable program, or batch file.";
    }
  }
});
