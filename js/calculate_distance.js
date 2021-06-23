function func(x) {
    alert(x.value);
    switch (x.value) {
        case "0":
            alert("selected 0");
            break;
        case "[-75.343, 39.984]":
            alert("Cape Town");
            break;
        case "2":
            alert("selected 2");
            break;
        case "3":
            alert("selected 3");
            break;
        case "4":
            alert("selected 4");
            break;
        default: // called if the value is none of the above
            alert("selected 5");
            break;
    }
}
function selectTo(destination) {
    alert(destination.value);
    switch (destination.value) {
        case "0":
            alert("selected 0");
            break;
        case "[-75.343, 39.984]":
            alert("Cape Town");
            break;
        case "2":
            alert("selected 2");
            break;
        case "3":
            alert("selected 3");
            break;
        case "4":
            alert("selected 4");
            break;
        default: // called if the value is none of the above
            alert("selected 5");
            break;
    }
}

document.getElementById("selectFrom").addEventListener("onchange", func(x))