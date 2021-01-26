function step() {
    if (x >= 91 && speedX > 0) {
        speedX = -speedX;
    } else {
        x += speedX;
    }
    
    y += speedY;

    updateView();
}

function add(a, b) {
    return a + b;
}