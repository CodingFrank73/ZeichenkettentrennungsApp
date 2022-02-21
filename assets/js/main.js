
let stringA = document.getElementById("stringA")
let stringB = document.getElementById("stringB")
let selection = document.getElementById("befor");

function cutString() {

    let posStringB = stringA.value.search(stringB.value);
    let stringBefor = "";
    let stringAfter = "";

    if (selection.checked == true) {
        stringBefor = stringA.value.substring(0, posStringB);
        stringAfter = stringA.value.substring(posStringB);

    } else {
        stringAfter = stringA.value.substring(posStringB + Number(stringB.value.length));
        stringBefor = stringA.value.substring(0, posStringB + Number(stringB.value.length));
    }

    document.getElementById("vorne").innerHTML = stringBefor.trim();
    document.getElementById("hinten").innerHTML = stringAfter.trim();
}
