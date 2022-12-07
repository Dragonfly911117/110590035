function btn1Pressed() {
    const tds = document.getElementsByTagName('table');
    for (let i = 0; i < tds.length; i++)
        tds[i].style.width = '200px';
}
function btn2Pressed() {
    const tds = document.getElementsByTagName('table');
    for (let i = 0; i < tds.length; i++)
        tds[i].style.width = '500px';   
}   

function btn3Pressed() {
    const tds = document.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++){
        tds[i].style.background = "Blue";
        tds[i].style.color = "white";
    }
}
function btn4Pressed() {
    const tds = document.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.background = "lightcyan";
        tds[i].style.color = "black";
    }
}
function btn5Pressed() {
    const tds = document.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++){
        tds[i].style.background = "Brown";
        tds[i].style.color = "white";
    }
}
function btn6Pressed() {
    const tds = document.getElementsByTagName('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.background = "Purple";
        tds[i].style.color = "white";
    }
}

function btn7Pressed() {
    document.getElementById("table").style.border="1px solid gray";
    document.getTitleElementById("table").style.borderSpacing = "1px";
}

function btn8Pressed() {
    document.getElementById("table").style.border="10px solid gray";
    document.getElementById("table").style.borderSpacing = "10px";
    // document.getElementById("table").style.borderCollapse=" separate";
}

function btn9Pressed() {
    document.getElementById("table").style.border="20px solid gray";
    document.getElementById("table").style.borderSpacing = "20px";
}
reset = () => {
    window.location.reload();
}