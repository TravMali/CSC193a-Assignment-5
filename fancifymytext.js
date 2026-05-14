function tester() {
    alert("Hello world");
}

function bigger() {
    document.getElementById("text").style.fontSize = "24px";
}

function fancyShmancy() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function boringBetty() {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function moo() {
    let element = document.getElementById("text");
    let parts = element.value.toUpperCase().split(".");
    element.value = parts + "-Moo";
}