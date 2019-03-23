var table = new Array(9);

function computer() {
    var id = Math.floor(Math.random() * 9);
    if (!table[id]) {
        move(id, "computer");
    }
    else {
        computer();
    }
}

function move(id, role) {
    if (table[id]) return;

    table[id] = role;
    var cell = document.getElementById(id);
    cell.className = "cell " + role;
    if (checkEnd(role)) {
        finish();
        return;
    }
    if (role === "player") {
        computer();
    }
}

function checkEnd(role) {
    if (table[0] == role && table[1] == role && table[2] == role) {
        return true;
    }
    if (table[3] == role && table[4] == role && table[5] == role) {
        return true;
    }
    if (table[6] == role && table[7] == role && table[8] == role) {
        return true;
    }
    if (table[0] == role && table[3] == role && table[6] == role) {
        return true;
    }
    if (table[1] == role && table[4] == role && table[7] == role) {
        return true;
    }
    if (table[2] == role && table[5] == role && table[8] == role) {
        return true;
    }
    if (table[0] == role && table[4] == role && table[8] == role) {
        return true;
    }
    if (table[2] == role && table[4] == role && table[6] == role) {
        return true;
    }
    if (table[0] && table[1] && table[2] && table[3] && table[4] && table[5]
        && table[6] && table[7] && table[8]) {
        return true;
    }
    return false;
}

function finish() {
    if (confirm("Игра закончена. Хотите начать сначала?")) {
        location.reload();
    }
    else {
        alert("До скорых встреч!");
    }
}